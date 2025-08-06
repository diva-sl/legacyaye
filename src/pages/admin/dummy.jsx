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

  const { id } = useParams();
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
      if (!values.image || !values.image.file) {
        return message.error("Please select a valid file to upload.");
      }

      const formData = new FormData();
      formData.append("file", values.image.file);

      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:5000/api/courses/upload-media",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      if (data.fileUrl) {
        await updateCourse({
          id: id,
          updatedData: { thumbnail: data.fileUrl },
        }).unwrap();
        setMedia(data.fileUrl);
        message.success("Media updated successfully!");
      }
    } catch (error) {
      console.error("Error uploading media:", error);
      message.error("Failed to upload media. Please try again.");
    }
  };

  const handleFinalSubmit = async () => {
    try {
      await updateCourse({
        id: id,
        updatedData: {
          requirements: tags,
          benefits,
          materialsIncluded,
          toolsAndSoftware,
        },
      }).unwrap();
      message.success("Course details updated successfully!");
    } catch (err) {
      message.error("Failed to update course details. Try again!");
    }
  };

  const handleTagAdd = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
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

  const handleTagRemove = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
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
            <Form form={form} layout="vertical" onFinish={handleBasicInfoSubmit}>
              {/* Basic Information Fields */}
              {/* Rest of the Form */}
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
              onClick={handleFinalSubmit}
              className="mt-4"
            >
              Submit for Review
            </Button>
          </TabPane>

          {/* Curriculum Tab and others remain unchanged */}
        </Tabs>
      </section>
    </div>
  );
};

export default UpdateCourse;
