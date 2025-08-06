import React, { useState } from "react";
import { Table, Typography, Spin, Button, Tag, Modal, Tabs, message } from "antd";
import { useChangeHiringRequestStatusMutation, useGetHiringRequestsQuery ,useDeleteHiringRequestMutation} from "../../redux/services/hireWithUs";
 

const { Title } = Typography;
const { confirm } = Modal;
const { TabPane } = Tabs;

const AdminHiringRequests = () => {
  const [activeTab, setActiveTab] = useState("all");

  const { data, isLoading, refetch } = useGetHiringRequestsQuery();
  const [updateHiringStatus] = useChangeHiringRequestStatusMutation();
  const [deleteHiringRequest] = useDeleteHiringRequestMutation();

  const handleChangeStatus = async (id, newStatus) => {
    try {
      await updateHiringStatus({ id, status: newStatus }).unwrap();
      message.success("Status updated successfully!");
      refetch();
    } catch (error) {
      message.error("Failed to update status. Please try again.");
    }
  };

  const handleDeleteRequest = (id) => {
    confirm({
      title: "Are you sure you want to delete this request?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          await deleteHiringRequest(id).unwrap();
          message.success("Hiring request deleted successfully!");
          refetch();
        } catch (error) {
          message.error("Failed to delete request. Please try again.");
        }
      },
    });
  };

  const filteredData =
    activeTab === "all"
      ? data?.data || []
      : data?.data?.filter((item) => item.status === activeTab) || [];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Requirements",
      dataIndex: "requirements",
      key: "requirements",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const colorMap = {
          pending: "orange",
          inProgress: "blue",
          completed: "green",
          rejected: "red",
        };
        return <Tag color={colorMap[status]}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            type="link"
            onClick={() => handleChangeStatus(record._id, "in_progress")}
          >
            Mark In Progress
          </Button>
          <Button
            type="link"
            onClick={() => handleChangeStatus(record._id, "completed")}
          >
            Mark Completed
          </Button>
          <Button
            type="link"
            onClick={() => handleChangeStatus(record._id, "closed")}
            danger
          >
            Mark Closed
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleDeleteRequest(record._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
    {
      title: "Submitted At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => new Date(createdAt).toLocaleString(),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Hiring Requests</Title>
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        style={{ marginBottom: 16 }}
      >
        <TabPane tab="All" key="all" />
        <TabPane tab="Pending" key="pending" />
        <TabPane tab="In Progress" key="in_progress" />
        <TabPane tab="Completed" key="completed" />
        <TabPane tab="Closed" key="closed" />
      </Tabs>

      {isLoading ? (
        <Spin />
      ) : (
        <Table
          dataSource={filteredData}
          columns={columns}
          rowKey="_id"
          pagination={{ pageSize: 10 }}
        />
      )}
    </div>
  );
};

export default AdminHiringRequests;
