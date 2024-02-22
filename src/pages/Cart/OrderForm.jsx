import React from "react";
import * as FormRouter from "./FormRouter";
import FormControl from "../../components/FormControl";

const OrderForm = ( { onSubmit }) => {

    const validate = (values) => {
        const errors = {};
        if (!values.deliveryAddress) {
          errors.deliveryAddress = "주소를 입력하세요";
        }
        if (!values.deliveryContact) {
          errors.deliveryContact = "연락처를 입력하세요";
        }
        if (!/^\d{2,3}-\d{3,4}-\d{4}$/.test(values.deliveryContact)) {
          errors.deliveryContact =
            "전화번호 형식으로 입력하세요. (예: 010-1234-5678)";
        }
        return errors;
      };

      
     return(
      <FormRouter.Form
      id="order-form"
      className = "OrderForm"
      validate={validate}
      onSubmit={onSubmit} 
      initialValues={{
        deliveryAddress: "",
        deliveryContact: "",
        paymentMethod: "",
        messageToShop: "",
        messageToRider: "",
      }}
      >
      <FormControl 
       label="주소" 
       required
       htmlFor="deliveryAddress"
       error={<FormRouter.ErrorMessage name="deliveryAddress"/>}
       >
      <FormRouter.Field 
       type="text"
       name="deliveryAddress"
       placeholder="배달 주소를 입력해주세요"
       autoFocus
      />
      </FormControl>
      <FormControl 
       label="연락처" 
       required
       htmlFor="deliveryContact"
       error={<FormRouter.ErrorMessage name="deliveryContact"/>}
       >
     <FormRouter.Field 
      type="text"
      name="deliveryContact"
      placeholder="연락처를 입력해주세요"
     />
      </FormControl>
      <FormControl 
      label="결제수단" 
      required
      htmlFor="paymentMethod">
      <FormRouter.Field 
      as="select"
      name="paymentMethod"
      >
       <option value="마이페이">마이페이</option>
       <option value="만나서결제">만나서 결제</option>
      </FormRouter.Field>
      </FormControl>
      <FormControl 
      label="가게사장님께"
      htmlFor="messageToShop"
      >
      <FormRouter.Field as="textarea" name="messageToShop"/>
      </FormControl>
      <FormControl 
       label="라이더님께"
       htmlFor="messageToRider">
      <FormRouter.Field as="textarea" name="messageToRider"/>
      </FormControl>
      </FormRouter.Form>

     )

}

export default OrderForm;