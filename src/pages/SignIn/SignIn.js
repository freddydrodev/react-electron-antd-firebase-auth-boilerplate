import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { Link } from "react-router-dom";
import { app } from "../../config/base";

const FormItem = Form.Item;

class SignIn extends Component {
  state = {
    msgLoading: false,
    msg: null
  };
  signInHandler = e => {
    e.preventDefault();
    this.setState({ msgLoading: true });

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.msg.loading("validating");
        const { em, ps } = values;
        app
          .auth()
          .signInWithEmailAndPassword(em, ps)
          .then(() => {
            this.msg.success(
              <span>
                logged in with <b>{em}</b>
              </span>
            );
          })
          .catch(err => {
            this.msg.error(err.message);
          });
      }
    });
  };

  componentDidMount() {
    this.msg = message;
    this.msg.config({
      maxCount: 1
    });
  }
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div>
        <Form
          style={{ width: 350 }}
          className={`mx-auto pt-5`}
          onSubmit={this.signInHandler}
        >
          <FormItem
            className={`mb-0`}
            required={true}
            label={`Your Email`}
            colon={false}
          >
            {getFieldDecorator("em", {
              rules: [
                {
                  required: true,
                  message: "This field is required",
                  whitespace: true
                },
                { type: "email", message: "Must be a valid email address" }
              ]
            })(<Input placeholder={`Enter Your Email`} type={`email`} />)}
          </FormItem>
          <FormItem
            className={`mb-0`}
            required={true}
            label={`Your Password`}
            colon={false}
          >
            {getFieldDecorator("ps", {
              rules: [
                {
                  required: true,
                  message: "This field is required",
                  whitespace: true
                }
              ]
            })(<Input placeholder={`Enter Your Password`} type={`password`} />)}
          </FormItem>

          <FormItem>
            <Button htmlType={`submit`} type={`primary`} className={`w-100`}>
              Login
            </Button>
          </FormItem>
          <p className={`flex between`}>
            <Link to={`/register`}>register now</Link>
            <Link to={`/passwordForget`}>password forget</Link>
          </p>
        </Form>
      </div>
    );
  }
}

export default Form.create()(SignIn);
