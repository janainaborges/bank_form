import { useState } from "react";
import Select from "../Inputs/Select";

import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  BoxBlue,
  BoxForm,
  ContainerForm,
  Label,
  RedAsterisk,
  Title,
} from "./Form.styles";
import TextInputWithFormatting from "./StyledMessage";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { occupationalData, } from "@/shared/mock";

import { z } from "zod";
import { updateFormData } from "@/provider/slices/formSlice";
import { useDispatch } from "react-redux";

const infoData: any[] = [
  { value: "value1", label: "Valor 1" },
  { value: "value2", label: "Valor 2" },
];

interface FormEmailI {
  onNextStep: () => void;
}
const FormEmail: React.FC<FormEmailI> = ({ onNextStep }) => {

  const [occupationalValue, setOccupationalValue] = useState("");

  const dispatch = useDispatch();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
  });

  const onSubmit = (data: Record<string, any>) => {
    dispatch(updateFormData(data));
    onNextStep();
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
          <span>
            Profissional:<RedAsterisk>*</RedAsterisk>
          </span>

          <Select
            options={occupationalData}
            value={occupationalValue}
            onChange={setOccupationalValue}
            placeholder="Selecione uma profissional"
            disabled={true}
          />
        </Label>
      </BoxForm>
      <Label>
        <Title>Enviar cobrança por e-mail:</Title>
        <BoxBlue>
          Esse é a mensagem por e-mail que seus clientes irão receber. Clique no
          campo de texto para editar o conteúdo da mensagem e depois siga para o
          próximo passo.
        </BoxBlue>
      </Label>
      <BoxForm>
        <Label>
          <div style={{ display: "flex" }}>
            Marcação dinâmica: <IoIosHelpCircleOutline fontSize={20} />
          </div>
          <Controller
            name="info"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                onChange={(selectedOption: any) =>
                  field.onChange(selectedOption)
                }
                active={errors.state}
                options={infoData}
                placeholder="Selecione..."
              />
            )}
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


