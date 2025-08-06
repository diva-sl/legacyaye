import React, { useEffect, useState } from "react";
import {
  Tabs,
  Form,
  Input,
  Select,
  Button,
  Upload,
  Collapse,
  Modal,
  Tag,
  message,
  Space,
} from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { PlusOutlined, InboxOutlined } from "@ant-design/icons";
import {
  useUpdateCourseMutation,
  useGetCourseByIdQuery,
} from "../../redux/services/courseApi";
import { useGetAllCategoriesQuery } from "../../redux/services/categoryApi";
import { useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";

const { TabPane } = Tabs;
const { Option } = Select;
const { Panel } = Collapse;

const UpdateCourse = () => {

  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [curriculumSections, setCurriculumSections] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isGroupModalVisible, setIsGroupModalVisible] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(null);
  const [benefits, setBenefits] = useState([]);
  const [benefitInput, setBenefitInput] = useState("");
  const [materialsIncluded, setMaterialsIncluded] = useState([]);
  const [materialInput, setMaterialInput] = useState("");
  const [toolsAndSoftware, setToolsAndSoftware] = useState([]);
  const [toolInput, setToolInput] = useState("");


const {id}=useParams()
  const [form] = Form.useForm();
  const [mediaForm] = Form.useForm();
  const [groupForm] = Form.useForm();
  const [lectureForm] = Form.useForm();
  const [media, setMedia] = useState(null);
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: courseDetails, refetch } = useGetCourseByIdQuery(id, {
    skip: !id,
  });
  const [updateCourse] = useUpdateCourseMutation();

 
  useEffect(() => {
    if (id && courseDetails) {
      form.setFieldsValue({
        title: courseDetails.title,
        description: courseDetails.description,
        category: courseDetails.category?._id,
        level: courseDetails.level,
        duration: courseDetails.duration,
        price: courseDetails.price,
        lessons: courseDetails.lessons,
        certifications: courseDetails.certifications,
        offerPrice: courseDetails.offerPrice,
      });
      mediaForm.setFieldsValue({
        videoUrl: courseDetails.videoUrl,
      });
      setCurriculumSections(courseDetails.sections || []);
      setTags(courseDetails.requirements || []);
      setMedia(courseDetails.thumbnail);
      setBenefits(courseDetails.benefits || []);
      setMaterialsIncluded(courseDetails.materialsIncluded || []);
      setToolsAndSoftware(courseDetails.toolsAndSoftware || []);
    }
  }, [courseDetails]);

  const handleBasicInfoSubmit = async (values) => {
    try {
      await updateCourse({ id: id, updatedData: values }).unwrap();
      message.success("Course updated successfully!");
    } catch (err) {
      message.error("Failed to update course. Try again!");
    }
  };

  const handleMediaSubmit = async (values) => {
    try {
    console.log(values)
      if (!values.image || !values.image.file ) {
        return message.error("Please select a valid file to upload.");
      }
  
      const formData = new FormData();
      formData.append("file", values.image.file);
  
      // Send the file using Axios
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "https://lmslegacy.onrender.com/api/courses/upload-media",
        formData,  
        {
          headers: {
            "Content-Type": "multipart/form-data", 
              Authorization: `Bearer ${token}`
            // Ensure proper header for file uploads
          },
        }
      );
  
      const data = response.data;
      if (data.fileUrl) {
        // Update the course with the uploaded file URL
        await updateCourse({
          id: id,
          updatedData: { thumbnail: data.fileUrl },
        }).unwrap();
        setMedia(data.fileUrl); // Update frontend state
        message.success("Media updated successfully!");
      }
    } catch (error) {
      console.error("Error uploading media:", error);
      message.error("Failed to upload media. Please try again.");
    }
  };
  const [currentLectureIndex, setCurrentLectureIndex] = useState(null);

  const editLecture = (sectionIndex, lectureIndex, lecture) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentLectureIndex(lectureIndex);
    lectureForm.setFieldsValue({
      title: lecture.title,
      duration: lecture.duration,
      requiresEnrollment: lecture.requiresEnrollment,
      videoUrl: lecture.videoUrl,
    });
    setIsModalVisible(true);
  };
  const handleLectureEdit = (sectionIndex, lectureIndex, updatedLecture) => {
    setCurriculumSections((prevSections) => {
      // Create a copy of the sections array
      const updatedSections = [...prevSections];
  
      // Create a copy of the lectures array for the specific section
      const updatedLectures = [...updatedSections[sectionIndex].lectures];
  
      // Update the specific lecture in the copied lectures array
      updatedLectures[lectureIndex] = { ...updatedLectures[lectureIndex], ...updatedLecture };
  
      // Assign the updated lectures array back to the specific section
      updatedSections[sectionIndex] = {
        ...updatedSections[sectionIndex],
        lectures: updatedLectures,
      };
  
      // Return the updated sections array
      return updatedSections;
    });
  
    message.success("Lecture updated successfully!");
  };
  
  
  
  const handleCurriculumSubmit = async () => {
    try {
      await updateCourse({
        id: id,
        updatedData: { sections: curriculumSections },
      }).unwrap();
      message.success("Curriculum updated successfully!");
    } catch (err) {
      message.error("Failed to update curriculum. Try again!");
    }
  };

  const addGroup = (values) => {
    setCurriculumSections([
      ...curriculumSections,
      { title: values.title, lectures: [] },
    ]);
    setIsGroupModalVisible(false);
    message.success("Section added successfully!");
  };

  const addLecture = (values) => {
    const updatedSections = curriculumSections.map((section, index) => {
      if (index === currentSectionIndex) {
        return {
          ...section,
          lectures: [...section.lectures, values],
        };
      }
      return section;
    });

    setCurriculumSections(updatedSections);
    setIsModalVisible(false);
    message.success("Lecture added successfully!");
  };

  const handleTagAdd = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };
const deleteGroup = (sectionIndex) => {
  setCurriculumSections((prevSections) => {
    const updatedSections = [...prevSections];
    updatedSections.splice(sectionIndex, 1); // Remove the selected section
    return updatedSections;
  });
  message.success("Section deleted successfully!");
};

  const handleFinalSubmit = async () => {
    try {
      await updateCourse({
        id: id,
        updatedData: { requirements: tags },
      }).unwrap();
      message.success("Requirements updated successfully!");
    } catch (err) {
      message.error("Failed to update requirements. Try again!");
    }
  };

  const handleCourseDetailsSubmit = async () => {
    try {
      await updateCourse({
        id: id,
        updatedData: {
          requirements: tags,
          benefits: benefits,
          materialsIncluded: materialsIncluded,
          toolsAndSoftware: toolsAndSoftware,
        },
      }).unwrap();
      message.success("Course details updated successfully!");
    } catch (err) {
      message.error("Failed to update course details. Try again!");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };
 

  const handleBenefitAdd = () => {
    if (benefitInput && !benefits.includes(benefitInput)) {
      setBenefits([...benefits, benefitInput]);
      setBenefitInput("");
    }
  };

  const handleMaterialAdd = () => {
    if (materialInput && !materialsIncluded.includes(materialInput)) {
      setMaterialsIncluded([...materialsIncluded, materialInput]);
      setMaterialInput("");
    }
  };

  const handleToolAdd = () => {
    if (toolInput && !toolsAndSoftware.includes(toolInput)) {
      setToolsAndSoftware([...toolsAndSoftware, toolInput]);
      setToolInput("");
    }
  };
  const handleBenefitRemove = (benefitToRemove) => {
    setBenefits((prevBenefits) =>
      prevBenefits.filter((benefit) => benefit !== benefitToRemove)
    );
  };

  const handleMaterialRemove = (materialToRemove) => {
    setMaterialsIncluded((prevMaterials) =>
      prevMaterials.filter((material) => material !== materialToRemove)
    );
  };

  const handleToolRemove = (toolToRemove) => {
    setToolsAndSoftware((prevTools) =>
      prevTools.filter((tool) => tool !== toolToRemove)
    );
  };
  return (
    <div>
      <section className="py-4 bg-primary">
        <div className="container">
          <h1 className="text-white">Edit Course</h1>
        </div>
      </section>
      <section className="container py-5">
        <Tabs defaultActiveKey="1">
        <TabPane tab="Basic Information" key="1">
        <Form
  form={form}
  layout="vertical"
  onFinish={handleBasicInfoSubmit}
>
  {/* Course Title */}
  <Form.Item
    label="Course Title"
    name="title"
    rules={[{ required: true, message: "Course title is required" }]}
  >
    <Input placeholder="Enter course title" />
  </Form.Item>

  {/* Course Category */}
  <Form.Item
    label="Course Category"
    name="category"
    rules={[{ required: true, message: "Course category is required" }]}
  >
    <Select placeholder="Select a category">
      {categories?.map((category) => (
        <Option key={category._id} value={category._id}>
          {category.name}
        </Option>
      ))}
    </Select>
  </Form.Item>

  {/* Course Level */}
  <Form.Item
    label="Course Level"
    name="level"
    rules={[{ required: true, message: "Course level is required" }]}
  >
    <Select placeholder="Select course level">
      <Option value="beginner">Beginner</Option>
      <Option value="intermediate">Intermediate</Option>
      <Option value="advanced">Advanced</Option>
    </Select>
  </Form.Item>

  {/* Price */}
  <Form.Item
    label="Price"
    name="price"
    rules={[{ required: true, message: "Price is required" }]}
  >
    <Input type="number" placeholder="Enter course price" />
  </Form.Item>

  {/* Offer Price */}
  <Form.Item
    label="Offer Price"
    name="offerPrice"
    rules={[
      { required: true, message: "Offer price is required" },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || value <= getFieldValue("price")) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("Offer price cannot be greater than the original price")
          );
        },
      }),
    ]}
  >
    <Input type="number" placeholder="Enter offer price" />
  </Form.Item>

  {/* Course Description */}
  <Form.Item
                label="Course Description"
                name="description"
                rules={[{ required: true, message: "Description is required" }]}
              >
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                  placeholder="Enter course description"
                />
              </Form.Item>
  {/* Course Duration */}
  <Form.Item
    label="Duration"
    name="duration"
    rules={[{ required: true, message: "Course duration is required" }]}
  >
    <Input placeholder="Enter course duration (e.g., 10h 20m)" />
  </Form.Item>

  {/* Number of Lessons */}
  <Form.Item
    label="Lessons"
    name="lessons"
    rules={[{ required: true, message: "Number of lessons is required" }]}
  >
    <Input type="number" placeholder="Enter number of lessons" />
  </Form.Item>

 
 
  <Form.Item
    label="Certifications"
    name="certifications"
    rules={[{ required: true, message: "Certification status is required" }]}
  >
    <Select placeholder="Select certification status">
      <Option value={true}>Yes</Option>
      <Option value={false}>No</Option>
    </Select>
  </Form.Item>

  {/* Graduation */}
  {/* <Form.Item
    label="Graduation"
    name="graduation"
    rules={[{ required: true, message: "Graduation requirement is required" }]}
  >
    <Input placeholder="Enter graduation requirement (e.g., 25K)" />
  </Form.Item> */}

  {/* Submit Button */}
  <Button type="primary" htmlType="submit">
    Update Basic Info
  </Button>
</Form>

          </TabPane>
          <TabPane tab="Course Details" key="2">
            <div>
              <h3>Benefits</h3>
              {benefits.map((benefit) => (
                <Tag
                  closable
                  key={benefit}
                  onClose={() => handleBenefitRemove(benefit)}
                  className="mb-2"
                >
                  {benefit}
                </Tag>
              ))}
              <Input
                placeholder="Add benefit"
                value={benefitInput}
                onChange={(e) => setBenefitInput(e.target.value)}
                onPressEnter={handleBenefitAdd}
                className="mt-2"
              />
              <Button type="dashed" onClick={handleBenefitAdd} className="mt-2">
                Add Benefit
              </Button>
            </div>

            <div>
              <h3>Materials Included</h3>
              {materialsIncluded.map((material) => (
                <Tag
                  closable
                  key={material}
                  onClose={() => handleMaterialRemove(material)}
                  className="mb-2"
                >
                  {material}
                </Tag>
              ))}
              <Input
                placeholder="Add material"
                value={materialInput}
                onChange={(e) => setMaterialInput(e.target.value)}
                onPressEnter={handleMaterialAdd}
                className="mt-2"
              />
              <Button
                type="dashed"
                onClick={handleMaterialAdd}
                className="mt-2"
              >
                Add Material
              </Button>
            </div>

            <div>
              <h3>Tools & Software</h3>
              {toolsAndSoftware.map((tool) => (
                <Tag
                  closable
                  key={tool}
                  onClose={() => handleToolRemove(tool)}
                  className="mb-2"
                >
                  {tool}
                </Tag>
              ))}
              <Input
                placeholder="Add tool"
                value={toolInput}
                onChange={(e) => setToolInput(e.target.value)}
                onPressEnter={handleToolAdd}
                className="mt-2"
              />
              <Button
                type="dashed"
                onClick={handleToolAdd}
                className="mt-2"
              >
                Add Tool
              </Button>
            </div>

            <Button
              type="primary"
              onClick={handleCourseDetailsSubmit}
              className="mt-4"
            >
              Submit for Review
            </Button>
          </TabPane>
          {/* Tab 2: Media */}
          <TabPane tab="Courses Media" key="3">
            {media && (
              <div>
                <p>Current Image:</p>
                <img src={media} alt="Course thumbnail" style={{ width: 200 }} />
              </div>
            )}
            <Form form={mediaForm} layout="vertical" onFinish={handleMediaSubmit}>
              <Form.Item
                label="Course Image"
                name="image"
                valuePropName="file"
                rules={[{ required: true }]}
              >
                <Upload.Dragger name="file" beforeUpload={() => false}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to upload</p>
                </Upload.Dragger>
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Upload Media
              </Button>
            </Form>
          </TabPane>

         

          
     <TabPane tab="Curriculum" key="4">
  <Button
    type="primary"
    icon={<PlusOutlined />}
    onClick={() => setIsGroupModalVisible(true)}
    className="mb-3"
  >
    Add Section
  </Button>

  <Collapse>
    {curriculumSections.map((section, sectionIndex) => (
      <Panel
        header={section.title}
        key={sectionIndex}
        extra={
          <Button
            type="link"
            danger
            onClick={(e) => {
              e.stopPropagation();
              deleteGroup(sectionIndex);
            }}
          >
            Delete Section
          </Button>
        }
      >
        <ul>
          {section.lectures.map((lecture, lectureIndex) => (
            <li key={lectureIndex}>
              <Space>
                <span>
                  <b>{lecture.title}</b> - {lecture.duration} minutes -{" "}
                  {lecture.requiresEnrollment ? "Requires Enrollment" : "Free"}
                </span>
                <Button
                  type="link"
                  onClick={() =>
                    editLecture(sectionIndex, lectureIndex, lecture)
                  }
                >
                  Edit
                </Button>
                <Button
                  type="link"
                  danger
                  onClick={() => deleteLecture(sectionIndex, lectureIndex)}
                >
                  Delete
                </Button>
              </Space>
            </li>
          ))}
        </ul>
        <Button
          type="dashed"
          onClick={() => {
            setCurrentSectionIndex(sectionIndex);
            setIsModalVisible(true);
          }}
        >
          Add Lecture
        </Button>
      </Panel>
    ))}
  </Collapse>

  <Button
    type="primary"
    onClick={handleCurriculumSubmit}
    className="mt-4"
  >
    Save Curriculum
  </Button>

  {/* Add Section Modal */}
  <Modal
    title="Add Section"
    open={isGroupModalVisible}
    onCancel={() => setIsGroupModalVisible(false)}
    footer={null}
  >
    <Form layout="vertical" onFinish={addGroup} form={groupForm}>
      <Form.Item
        label="Section Title"
        name="title"
        rules={[{ required: true, message: "Please provide a title!" }]}
      >
        <Input placeholder="Enter section title" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Add Section
      </Button>
    </Form>
  </Modal>

  {/* Add/Edit Lecture Modal */}
  <Modal
    title={currentSectionIndex !== null ? "Edit Lecture" : "Add Lecture"}
    open={isModalVisible}
    onCancel={() => setIsModalVisible(false)}
    footer={null}
  >
    <Form
      layout="vertical"
      onFinish={(values) => {
        if (currentSectionIndex !== null) {
          handleLectureEdit(
            currentSectionIndex,
            currentLectureIndex,
            values
          );
        } else {
          addLecture(values);
        }
        setIsModalVisible(false);
      }}
      form={lectureForm}
    >
      <Form.Item
        label="Lecture Title"
        name="title"
        rules={[{ required: true, message: "Please provide a title!" }]}
      >
        <Input placeholder="Enter lecture title" />
      </Form.Item>
      <Form.Item
        label="Video Duration (minutes)"
        name="duration"
        rules={[{ required: true, message: "Please enter video duration!" }]}
      >
        <Input type="number" placeholder="Enter video duration" />
      </Form.Item>
      <Form.Item
        label="Requires Enrollment"
        name="requiresEnrollment"
        valuePropName="checked"
      >
        <Select placeholder="Requires enrollment?">
          <Option value={true}>Yes</Option>
          <Option value={false}>No</Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form>
  </Modal>
</TabPane>


          {/* Tab 4: Requirements */}
          <TabPane tab="Requirements" key="5">
            <div>
              {tags.map((tag) => (
                <Tag
                  closable
                  key={tag}
                  onClose={() => handleTagRemove(tag)}
                  className="mb-2"
                >
                  {tag}
                </Tag>
              ))}
              <Input
                placeholder="Add requirement"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onPressEnter={handleTagAdd}
                className="mt-2"
              />
              <Button type="dashed" onClick={handleTagAdd} className="mt-2">
                Add Requirement
              </Button>
            </div>
            <Button type="primary" onClick={handleFinalSubmit} className="mt-4">
              Submit for Review
            </Button>
          </TabPane>

          <TabPane tab="Reviews" key="6">
          <Reviews course={courseDetails}/>
          </TabPane>
        </Tabs>
      </section>

      {/* Modals */}
      <Modal
        title="Add Section"
        open={isGroupModalVisible}
        onCancel={() => setIsGroupModalVisible(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={addGroup} form={groupForm}>
          <Form.Item
            label="Section Title"
            name="title"
            rules={[{ required: true, message: "Please provide a title!" }]}
          >
            <Input placeholder="Enter section title" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Add Section
          </Button>
        </Form>
      </Modal>

      <Modal
  title={currentLectureIndex !== null ? "Edit Lecture" : "Add Lecture"}
  open={isModalVisible}
  onCancel={() => {
    setIsModalVisible(false);
    setCurrentLectureIndex(null);
  }}
  footer={null}
>
<Form
  layout="vertical"
  onFinish={(values) => {
    if (currentLectureIndex !== null) {
      handleLectureEdit(currentSectionIndex, currentLectureIndex, values);
    } else {
      addLecture(values);
    }
    setIsModalVisible(false);
    setCurrentLectureIndex(null);
  }}
  form={lectureForm}
>
    {/* Lecture Title */}
    <Form.Item
      label="Lecture Title"
      name="title"
      rules={[{ required: true, message: "Please provide a title!" }]}
    >
      <Input placeholder="Enter lecture title" />
    </Form.Item>

    {/* Video URL */}
    <Form.Item
      label="Video URL"
      name="videoUrl"
      rules={[
        { required: true, message: "Please enter a video URL!" },
        { type: "url", message: "Please provide a valid URL!" },
      ]}
    >
      <Input placeholder="Enter video URL" />
    </Form.Item>

    {/* Video Duration */}
    <Form.Item
      label="Video Duration (minutes)"
      name="duration"
      rules={[{ required: true, message: "Please enter video duration!" }]}
    >
      <Input type="number" placeholder="Enter video duration" />
    </Form.Item>

    {/* Requires Enrollment */}
    <Form.Item
      label="Requires Enrollment"
      name="requiresEnrollment"
      rules={[{ required: true, message: "Please specify if enrollment is required!" }]}
    >
      <Select placeholder="Requires enrollment?">
        <Option value={true}>Yes</Option>
        <Option value={false}>No</Option>
      </Select>
    </Form.Item>

    <Button type="primary" htmlType="submit">
      Save
    </Button>
  </Form>
</Modal>

    </div>
  );
};

export default UpdateCourse;
