import {
  Button,
  Card,
  DatePicker,
  Flex,
  Form,
  Input,
  Select,
  Upload,
} from "antd"
import { PlusOutlined } from "@ant-design/icons"
import "./style.scss"
import { Link } from "react-router-dom"

const FormPage = () => {
  const [form] = Form.useForm()

  return (
    <>
      <Link to="/login" className="absolute top-0 left-0" />
      <div className="form-container relative">
        <Form layout="vertical" form={form}>
          <Flex vertical gap={24}>
            <Card className="form-card">
              <div className="form-group">
                <Form.Item
                  label="Korxona"
                  name="company"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Tanlang"
                    showSearch
                    optionFilterProp="label"
                    options={[
                      {
                        value: "1",
                        label: "164-son Qo‘qon temir yo‘l mashinalar bekati",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  label="Xodim"
                  name="worker"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Tanlang"
                    showSearch
                    optionFilterProp="label"
                    options={[
                      {
                        value: "1",
                        label: "4301-tiklash poyezdi",
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  label="Stansiya"
                  name="station"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder="Tanlang"
                    showSearch
                    optionFilterProp="label"
                    options={[
                      {
                        value: "1",
                        label: "Abadan",
                      },
                    ]}
                  />
                </Form.Item>
              </div>
            </Card>

            <Card className="form-card">
              <div className="form-group">
                <Form.Item label="Kompyuter turi" name="type">
                  <Input placeholder="Kiriting" />
                </Form.Item>
                <Form.Item label="UPS" name="ups">
                  <Input placeholder="Kiriting" />
                </Form.Item>
                <Form.Item label="Monitor" name="monitor">
                  <Input placeholder="Kiriting" />
                </Form.Item>
                <Form.Item label="Printer" name="printer">
                  <Input placeholder="Kiriting" />
                </Form.Item>
              </div>
            </Card>

            <Card className="form-card">
              <div className="form-group">
                <Form.Item label="AnyDesk manzili" name="anydesk">
                  <Input placeholder="Kiriting" />
                </Form.Item>
                <Form.Item label="RAdmin manzili" name="radmin">
                  <Input placeholder="Kiriting" />
                </Form.Item>
                <Form.Item label="Inventar raqami" name="inventory">
                  <Input placeholder="Kiriting" />
                </Form.Item>
                <Form.Item label="Kirim bo‘lgan vaqt" name="receivedDate">
                  <DatePicker format="DD-MM-YYYY" className="full-width" />
                </Form.Item>
              </div>
            </Card>

            <Card className="form-card">
              <div className="form-group">
                <Form.Item
                  label="Kompyuter rasmi"
                  name="image"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e && e.fileList
                  }
                >
                  <Upload beforeUpload={() => false} listType="picture-card">
                    <PlusOutlined />
                  </Upload>
                </Form.Item>

                <Flex justify="end" align="end">
                  <Button type="primary" htmlType="submit">
                    Saqlash
                  </Button>
                </Flex>
              </div>
            </Card>
          </Flex>
        </Form>
      </div>
    </>
  )
}

export default FormPage
