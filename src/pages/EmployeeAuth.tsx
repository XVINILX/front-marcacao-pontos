import { Form } from "antd";
import Button from "component/Button";
import Input from "component/Input/Input";
import { useAuth } from "contexts/AuthContext";
import React from "react";
import { loginEmployee } from "services/authService";

const EmployeeAuth: React.FC = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();
  const handleFormSubmit = async (values: any) => {
    try {
      const authResponse = await loginEmployee({
        loginIdentification: values.loginIdentification,
      });
      if (authResponse) {
        form.resetFields();
        login(authResponse);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Form
          form={form}
          onFinish={handleFormSubmit}
          layout="vertical"
          style={{ gap: "15px", display: "flex", flexDirection: "column" }}
        >
          <Input name={"loginIdentification"} placeholder="Adicionar login" />

          <Button text="Confirmar" type="submit" />
        </Form>
      </div>
    </div>
  );
};

export default EmployeeAuth;
