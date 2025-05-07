import { useState } from "react"
import { Button, Card, Form, Input, Typography } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import "./style.scss"
import { useNavigate } from "react-router-dom"

export default () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onFinish = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate("/")
    }, 3000)
  }

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="login-logo">🌐</div>

        <Typography.Title level={3} className="login-title">
          Sign in
        </Typography.Title>

        <Typography.Paragraph type="secondary" className="login-subtitle">
          Access the Service Management System to monitor and schedule
          organizational tasks.
        </Typography.Paragraph>

        <Form
          name="login"
          size="large"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password
              placeholder="Password"
              autoComplete="new-password"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Button
            block
            type="primary"
            htmlType="submit"
            className="login-button"
            loading={loading}
          >
            Log in
          </Button>
        </Form>
      </Card>
    </div>
  )
}
