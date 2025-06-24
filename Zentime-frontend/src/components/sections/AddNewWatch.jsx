import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addWatch } from "../../JS/actions/watchActions";

const AddNewWatch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);


    const handleAddWatch = (e) => {
      e.preventDefault();
      dispatch(addWatch(newWatch));
      setIsModalOpen(false);
    };

  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "object" && eOrName?.target) {
      const { name, value } = eOrName.target;
      setNewWatch((prev) => ({ ...prev, [name]: value }));
    } else {
      const name = eOrName;
      setNewWatch((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>
        Add new Watch
      </Button>
      <Modal
        title="Add New Watch"
        open={isModalOpen}
        onOk={handleAddWatch}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Form.Item
            label="Brand"
            name="brand"
            rules={[{ required: true, message: "Please enter the brand" }]}
          >
            <Input placeholder="e.g., Rolex" onChange={handleInputChange} />
          </Form.Item>

          <Form.Item
            label="Model"
            name="model"
            rules={[{ required: true, message: "Please enter the model" }]}
          >
            <Input
              placeholder="e.g., Submariner"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please enter the description" },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Watch details..."
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            label="Price ($)"
            name="price"
            rules={[{ required: true, message: "Please enter the price" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            label="Picture URL"
            name="pictureUrl"
            rules={[
              { required: true, message: "Please enter the picture URL" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input
              placeholder="https://example.com/watch.jpg"
              onChange={handleInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewWatch;
