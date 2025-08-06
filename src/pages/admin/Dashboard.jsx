import React from "react";
import { Row, Col, Card, Statistic, Table, Typography, Spin } from "antd";
import { Pie, Bar } from "@ant-design/plots";
import { useGetDashboardAnalyticsQuery } from "../../redux/services/dashboardApi";

const { Title } = Typography;

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardAnalyticsQuery();

  if (isLoading) {
    return <Spin style={{ marginTop: 100, display: 'block', textAlign: 'center' }} size="large" />;
  }

  const {
    totalStudents,
    totalLeads,
    totalRevenue,
    totalPayments,
    leadsByStatus,
    paymentsByMonth,
    topPayingStudents,
    coursesWithEnrollments,
  } = data?.data || {};

  const leadsPieConfig = {
    appendPadding: 10,
    data: leadsByStatus.map((status) => ({
      type: status._id,
      value: status.count,
    })),
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  const revenueBarConfig = {
    data: paymentsByMonth.map((month) => ({
      month: `Month ${month._id}`,
      revenue: month.totalRevenue,
    })),
    xField: 'month',
    yField: 'revenue',
    color: '#1890ff',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      revenue: {
        alias: 'Revenue',
      },
    },
  };

  const columns = [
    {
      title: 'Course Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Enrollments Count',
      dataIndex: 'enrollmentsCount',
      key: 'enrollmentsCount',
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Students" value={totalStudents} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Leads" value={totalLeads} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Revenue" value={totalRevenue} prefix="₹" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total Payments" value={totalPayments} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Card title="Leads by Status">
            <Pie {...leadsPieConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Revenue by Month">
            <Bar {...revenueBarConfig} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Courses with Enrollments">
            <Table
              columns={columns}
              dataSource={coursesWithEnrollments}
              rowKey="_id"
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </Col>
      </Row>

      {topPayingStudents?.length > 0 && (
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col span={24}>
            <Card title="Top Paying Students">
              <Table
                columns={[
                  { title: 'Name', dataIndex: 'name', key: 'name' },
                  { title: 'Email', dataIndex: 'email', key: 'email' },
                  { title: 'Total Payment', dataIndex: 'totalPayment', key: 'totalPayment' },
                ]}
                dataSource={topPayingStudents}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
              />
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Dashboard;
