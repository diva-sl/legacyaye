import React, { useEffect, useState } from "react";
import { Table, Input, DatePicker, Space, Modal, Form, InputNumber, Select, Button, Spin, message } from "antd";
import moment from "moment";
import {
  useLazyGetAllPaymentsQuery,
  useGetPaymentDetailsQuery,
  useUpdatePaymentAndAccessMutation,
} from "../../redux/services/paymentApi";

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

function PaymentList() {
  // State for Filters
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    search: "",
    startDate: null,
    endDate: null,
  });

  const [selectedPaymentId, setSelectedPaymentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  // Hooks for API calls
  const [fetchPayments, { data, isLoading, error }] = useLazyGetAllPaymentsQuery();
  const { data: paymentDetails, isLoading: isDetailsLoading } = useGetPaymentDetailsQuery(selectedPaymentId, {
    skip: !selectedPaymentId,
  });
  const [updatePaymentAndAccess, { isLoading: isUpdating }] = useUpdatePaymentAndAccessMutation();

  // Fetch Payments Function
  const handleFetchPayments = (updatedFilters) => {
    setFilters(updatedFilters);
    const validFilters = {
      ...updatedFilters,
      startDate: updatedFilters.startDate || undefined,
      endDate: updatedFilters.endDate || undefined,
    };
    fetchPayments(validFilters);
  };

  useEffect(() => {
    handleFetchPayments(filters);
  }, []);

  // Handle Pagination Change
  const handlePaginationChange = (page, pageSize) => {
    handleFetchPayments({ ...filters, page, limit: pageSize });
  };

  // Handle Search
  const handleSearch = (value) => {
    handleFetchPayments({ ...filters, search: value, page: 1 });
  };

  // Handle Date Range Change
  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates || [];
    handleFetchPayments({
      ...filters,
      startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : undefined,
      endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : undefined,
      page: 1,
    });
  };

  // Handle View/Update Modal
  const handleOpenModal = (paymentId) => {
    setSelectedPaymentId(paymentId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPaymentId(null);
    setIsModalOpen(false);
    form.resetFields();
  };

  // Handle Payment Update
  const handleUpdatePayment = async (values) => {
    try {
      const payload = {
        paymentId: selectedPaymentId,
        ...values,
      };
      await updatePaymentAndAccess(payload).unwrap();
      message.success("Payment updated successfully");
      handleCloseModal();
      handleFetchPayments(filters);
    } catch (error) {
      console.error("Error updating payment:", error);
      message.error("Failed to update payment.");
    }
  };

  // Table Columns
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "User Name",
      dataIndex: ["user", "name"],
      key: "user.name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => `₹${amount}`,
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status) => (
        <span
          style={{
            color: status === "success" ? "green" : status === "failed" ? "red" : "orange",
          }}
        >
          {status.toUpperCase()}
        </span>
      ),
    },
    {
      title: "Payment Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      render: (date) => moment(date).format("YYYY-MM-DD"),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Button type="link" onClick={() => handleOpenModal(record._id)}>
          View / Update
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment List</h2>

      {/* Filters */}
      <Space style={{ marginBottom: "20px", width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Search placeholder="Search by Transaction ID or User Name" onSearch={handleSearch} allowClear />
        <RangePicker onChange={handleDateChange} />
      </Space>

      {/* Payments Table */}
      <Table
        rowKey="_id"
        loading={isLoading}
        columns={columns}
        dataSource={data?.data?.payments || []}
        pagination={{
          current: filters.page,
          pageSize: filters.limit,
          total: data?.data?.totalPayments || 0,
          onChange: handlePaginationChange,
        }}
      />

      {/* Error Handling */}
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Error fetching data: {error.message || "Something went wrong"}
        </div>
      )}

      {/* Modal to View/Update Payment */}
      <Modal
        title="View / Update Payment Details"
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        {isDetailsLoading ? (
          <Spin />
        ) : (
          <Form form={form} layout="vertical" initialValues={paymentDetails?.data} onFinish={handleUpdatePayment}>
            <Form.Item label="Amount Paid" name="amountPaid">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Payment Status" name="paymentStatus">
              <Select>
                <Option value="success">Success</Option>
                <Option value="failed">Failed</Option>
                <Option value="pending">Pending</Option>
                <Option value="partiallyPaid">Partially Paid</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Revoke Access" name="revokeAccess">
              <Select>
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isUpdating}>
                Update Payment
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
}

export default PaymentList;
