import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Rate,
  Space,
  Row,
  Col,
  Typography,
  Spin,
  message,
} from "antd";
import {
  useAddReviewByAdminMutation,
  useUpdateReviewByAdminMutation,
  useFilterAndSearchReviewsQuery,
} from "../../redux/services/reviewApi";

const { Title } = Typography;

const Reviews = ({ course, userId }) => {
  const [currentReview, setCurrentReview] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filterParams, setFilterParams] = useState({ page: 1, limit: 10, search: "" });

  const { data: reviewsData, isLoading } = useFilterAndSearchReviewsQuery({
    ...filterParams,
    courseId: course._id,
  });

  const [addReview] = useAddReviewByAdminMutation();
  const [updateReview] = useUpdateReviewByAdminMutation();

  const [form] = Form.useForm();

  const handleOpenModal = (review = null) => {
    setCurrentReview(review);
    if (review) {
      form.setFieldsValue({
        rating: review.rating,
        comment: review.comment,
      });
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
    setCurrentReview(null);
    form.resetFields();
  };

  const handleFormSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        userId,
        courseId: course._id,
      };

      if (currentReview) {
        await updateReview({
          reviewId: currentReview._id,
          ...payload,
        }).unwrap();
        message.success("Review updated successfully.");
      } else {
        await addReview(payload).unwrap();
        message.success("Review added successfully.");
      }

      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error("Failed to submit review. Please try again.");
    }
  };

  const handleSearchChange = (e) => {
    setFilterParams((prev) => ({ ...prev, search: e.target.value, page: 1 }));
  };

  const handleTableChange = (pagination) => {
    setFilterParams((prev) => ({ ...prev, page: pagination.current, limit: pagination.pageSize }));
  };

  const columns = [
    {
      title: "User",
      dataIndex: ["user", "name"],
      key: "user",
      render: (name) => <strong>{name}</strong>,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate value={rating} disabled />,
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleOpenModal(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col>
          <Title level={3}>Manage Reviews for {course.title}</Title>
        </Col>
        <Col>
          <Input.Search
            placeholder="Search reviews"
            onChange={handleSearchChange}
            allowClear
            style={{ width: 300 }}
          />
        </Col>
        <Col>
          <Button type="primary" onClick={() => handleOpenModal()}>
            Add Review
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={reviewsData?.reviews || []}
        rowKey="_id"
        loading={isLoading}
        pagination={{
          current: filterParams.page,
          pageSize: filterParams.limit,
          total: reviewsData?.pagination?.totalReviews || 0,
        }}
        onChange={handleTableChange}
      />

      <Modal
        title={currentReview ? "Edit Review" : "Add Review"}
        visible={isModalVisible}
        onCancel={handleCancelModal}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={{ rating: 0 }}
        >
          <Form.Item
            name="rating"
            label="Rating"
            rules={[{ required: true, message: "Rating is required." }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            name="comment"
            label="Comment"
            rules={[{ required: true, message: "Comment is required." }]}
          >
            <Input.TextArea rows={4} placeholder="Enter your comment" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              {currentReview ? "Update Review" : "Add Review"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Reviews;
