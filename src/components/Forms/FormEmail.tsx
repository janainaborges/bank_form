import { useState } from "react";
import Select from "../Inputs/Select";

import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { schemaStepOne } from "@/utils/schemaStepOne";
import { BoxContainer, BoxForm, ContainerForm, Label, Title } from "./Form.styles";
import TextInputWithFormatting from "./StyledMessage";

const occupationalData: any[] = [
  { value: "value1", label: "Valor 1" },
  { value: "value2", label: "Valor 2" },
];

interface FormEmailI {
  onNextStep: () => void;
  setIsFormValid: any;
}
const FormEmail: React.FC<FormEmailI> = ({ onNextStep, setIsFormValid }) => {
  const [occupationalValue, setOccupationalValue] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaStepOne),
  });

  const onSubmit = (data: any) => {
    setIsFormValid(schemaStepOne);
    onNextStep;
    console.log(data);
  };

  return (
    <ContainerForm
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "1rem 0.4rem",
      }}
    >
      <BoxForm>
        <Label>
          Profissional
          <Select
            options={occupationalData}
            value={occupationalValue}
            onChange={setOccupationalValue}
            placeholder="Selecione uma profissional"
          />
        </Label>
      </BoxForm>
      <Label>
      <Title>Enviar cobrança por e-mail:</Title>
        <BoxContainer>
        Esse é a mensagem por e-mail que seus clientes irão receber. Clique no
          campo de texto para editar o conteúdo da mensagem e depois siga para o
          próximo passo. 
        </BoxContainer>
      </Label>
      <BoxForm>
        <Label>
          Marcação dinâmica:
          <Select
            options={occupationalData}
            value={occupationalValue}
            onChange={setOccupationalValue}
            placeholder="Selecione uma profissional"
          />
        </Label>
      </BoxForm>
      <BoxForm>
        <TextInputWithFormatting />
      </BoxForm>
    </ContainerForm>
  );
};
export default FormEmail;
