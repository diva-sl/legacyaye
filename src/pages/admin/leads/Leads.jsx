import React, { useState } from "react";
import { Table, Tag, Tabs, Select, Space, message, Popconfirm, Button } from "antd";
import { 
  useGetAllLeadsQuery, 
  useUpdateLeadStatusMutation, 
  useDeleteLeadMutation, 
useDownloadResumeMutation
} from "../../../redux/services/leadApi";

const { TabPane } = Tabs;
const { Option } = Select;

function AdminLeads() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [statusFilter, setStatusFilter] = useState("");

  const { data: leadsData, isLoading } = useGetAllLeadsQuery(statusFilter);
  const [updateLeadStatus] = useUpdateLeadStatusMutation();
  const [deleteLead] = useDeleteLeadMutation();
  const [downloadResume] = useDownloadResumeMutation();

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateLeadStatus({ id, status: newStatus }).unwrap();
      message.success("Lead status updated successfully!");
    } catch (error) {
      message.error("Failed to update lead status.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteLead(id).unwrap();
      message.success("Lead deleted successfully!");
    } catch (error) {
      message.error("Failed to delete lead.");
    }
  };

  const handleTabChange = (key) => {
    setStatusFilter(key === "all" ? "" : key);
    setCurrentPage(1);
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleDownloadResume = async (resumeKey) => {
    try {
      const { data } = await downloadResume(resumeKey).unwrap();
console.log(data)
return
      const link = document.createElement("a");
      link.href = URL.createObjectURL(new Blob([data], { type: "application/pdf" }));
      link.download = `${resumeKey.split("/").pop()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      message.success("Resume downloaded successfully!");
    } catch (error) {
      message.error("Failed to download resume.");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Preferred Course",
      dataIndex: "preferredCourse",
      key: "preferredCourse",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = status === "new" ? "blue" : status === "contacted" ? "green" : "volcano";
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          {/* Update Status */}
          <Select
            defaultValue={record.status}
            style={{ width: 150 }}
            onChange={(value) => handleStatusChange(record._id, value)}
          >
            <Option value="new">New</Option>
            <Option value="contacted">Contacted</Option>
            <Option value="converted">Converted</Option>
            <Option value="lost">Lost</Option>
          </Select>

          {/* Download Resume */}
          {record.resume && (
            <Button
              type="link"
              onClick={() => handleDownloadResume(record.resume)}
              style={{ color: "green" }}
            >
              Download Resume
            </Button>
          )}

          {/* Delete Lead */}
          <Popconfirm
            title="Are you sure you want to delete this lead?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <a style={{ color: "red" }}>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Leads Management</h2>

      <Tabs defaultActiveKey="all" onChange={handleTabChange}>
        <TabPane tab="All" key="all" />
        <TabPane tab="New" key="new" />
        <TabPane tab="Contacted" key="contacted" />
        <TabPane tab="Converted" key="converted" />
        <TabPane tab="Lost" key="lost" />
      </Tabs>

      <Table
        columns={columns}
        dataSource={leadsData?.leads?.map((lead) => ({ ...lead, key: lead._id }))}
        loading={isLoading}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: leadsData?.total || 0,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
}

export default AdminLeads;
