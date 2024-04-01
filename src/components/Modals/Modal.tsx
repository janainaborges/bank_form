/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import FormField from "../Forms/FormField";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "@/provider/slices/formSlice";
import { Box, BoxContainer, BoxLabel, Circle, CircleContainer, CloseButton, Header, ModalBackdrop, ModalContainer, ProgressContainer, Step, StepLabel, SubTitle, Title } from "./Modal.styles";
import FormEmail from "../Forms/FormEmail";
import FormActive from "../Forms/FormActive";
import ButtonCart from "../Buttons/ButtonCart";

const ProgressBox = ({ steps, currentStep }: any) => {
  return (
    <ProgressContainer>
      {steps.map((step: any, index: any) => (
        <React.Fragment key={step}>
          {index !== 0 && <Step active={index <= currentStep} />}
          <Circle active={index === currentStep} />
        </React.Fragment>
      ))}
    </ProgressContainer>
  );
};

const Modal = ({ isOpen, onClose }: any) => {
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  
  const stepsComponents = [
    FormField, FormEmail, FormActive
  ];


  if (!isOpen) return null;
  
  const handleSubmit = () => {
    formRef?.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    console.log(formRef)
  };
  
  const CurrentStepComponent = stepsComponents[currentStep];

  const steps = [
    "Register an account",
    "Delivery channels and billing message",
    "Payment form of the charge",
  ];

  const nextStep = () => {
    
    if (isCurrentFormValid) {
      setCurrentStep(currentStep => currentStep + 1);
      setIsCurrentFormValid(false); 
    } else {
      handleSubmit()

      alert('Por favor, complete todos os campos necessários antes de prosseguir.');
    }
  };

  const prevStep = () => setCurrentStep((currentStep) => currentStep - 1);

  
  const stepLabel = [
    { label: "Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua conta corrente é CNPJ e preencha o CPF correto do responsável da conta." },
    { label: "O preenchimento incorreto das informações pode trazer transtornos no momento da transferência do valor para essa conta corrente." },
    { label: "Se possível preencha com calma para não ocorrer erros." },
  ];

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Ativar o PsicoBank</Title>
          <CloseButton onClick={onClose}>
            <CgClose fontSize={20} />
          </CloseButton>
        </Header>
        <ProgressBox steps={steps} currentStep={currentStep} />
        <CircleContainer>
          {steps.map((el: any) => (
            <StepLabel key={el.label}>{el.label}</StepLabel>
          ))}
        </CircleContainer>
        <div>
          <Title>Preencha os itens a seguir para configurar o PsicoBank</Title>
          <BoxContainer>
            <SubTitle>Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de sua conta.</SubTitle>
            {stepLabel.map((el: any) => (
              <BoxLabel key={el.label}>
                <li>{el.label}</li>
              </BoxLabel>
            ))}
          </BoxContainer>
          <CurrentStepComponent onNextStep={() => nextStep} setIsFormValid={setIsCurrentFormValid} formRef={formRef} />

        </div>
        <Box>
        {currentStep < steps.length + 1 && (
          <ButtonCart onClick={prevStep} filter={false} text={"Cancelar"} size={"large"} backgroundColor="none" border="#2797BA" color="#2797BA"/>
        )}
        {currentStep < steps.length + 1 && (
          <ButtonCart onClick={nextStep} type="submit" text={"Próximo"} filter={false} size={"large"}color="white" backgroundColor="#2797BA" border="#2797BA" />
        )}
         </Box>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
