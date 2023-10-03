import { Modal, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space } from "antd";
import { AchievementInterface } from "../cards/achievementsCard";
import { editUser } from "../../../api/firestoreAPI";

export interface AddAchievementModalProps {
  modalOpenState: boolean;
  setModalOpenState: (bool: boolean) => void;
  setAchievements: (achievement: AchievementInterface) => void;
  achievements: AchievementInterface;
}

export default function AddAchievementModal({
  modalOpenState,
  setModalOpenState,
  setAchievements,
  achievements,
}: AddAchievementModalProps) {
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Add your achievements"
        centered
        open={modalOpenState}
        okButtonProps={{
          type: "default",
        }}
        cancelButtonProps={{ type: "link" }}
        okText={"Save"}
        onOk={() => {
          editUser(form.getFieldsValue(), localStorage.getItem("id") ?? "");

          setAchievements(form.getFieldsValue());
          setModalOpenState(false);
        }}
        onCancel={() => {
          setAchievements(achievements);
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
          initialValues={achievements}
        >
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Game ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item label="Game" name={[field.name, "game"]}>
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item label="Achievement">
                      <Form.List name={[field.name, "achievementList"]}>
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
                                <Form.Item
                                  name={[subField.name, "achievement"]}
                                >
                                  <Input placeholder="Achievement" />
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
                              + Achievement
                            </Button>
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Game
                </Button>
              </div>
            )}
          </Form.List>

          {/* <Form.Item noStyle shouldUpdate>
            {() => (
              <Typography>
                <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
              </Typography>
            )}
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
}
