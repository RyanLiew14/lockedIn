import { Button, Card, Form, Input, Modal, Space, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { CareerInterface } from "../cards/experienceCard";

interface EditCareerModalInterface {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  setCareer: (career: CareerInterface) => void;
  career: CareerInterface;
}

export default function EditCareerModal({
  modalOpenState,
  setModalOpenState,
  career,
  setCareer,
}: EditCareerModalInterface) {
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        title="Show your career"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Save"}
        onOk={() => {
          setCareer(form.getFieldsValue());
          setModalOpenState(false);
        }}
        onCancel={() => {
          setCareer(career);
          setModalOpenState(false);
        }}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          initialValues={career}
        >
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Organization ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item
                      label="Organization"
                      name={[field.name, "organization"]}
                    >
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item label="Role">
                      <Form.List name={[field.name, "roleList"]}>
                        {(subFields, subOpt) => (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 16,
                            }}
                          >
                            {subFields.map((subField) => (
                              <Space key={subField.key}>
                                <Form.Item name={[subField.name, "role"]}>
                                  <Input placeholder="Role" />
                                </Form.Item>
                                <Form.Item name={[subField.name, "year"]}>
                                  <Input placeholder="Year" />
                                </Form.Item>

                                <CloseOutlined
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                />
                              </Space>
                            ))}
                            <Button
                              type="dashed"
                              onClick={() => subOpt.add()}
                              block
                            >
                              + Role
                            </Button>
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Organization
                </Button>
              </div>
            )}
          </Form.List>

          <Form.Item noStyle shouldUpdate>
            {() => (
              <Typography>
                <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
              </Typography>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
