import { useState } from "react";
import Select from "../Inputs/Select";

import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Inputs/Input";
import { schemaStepOne } from "@/utils/schemaStepOne";
import { cep_mask, cpf_mask, phone_mask } from "@/utils/masks";
import { BoxForm, ContainerForm, Label, RedAsterisk } from "./Form.styles";

const occupationalData: any[] = [
  { value: 1, label: "Valor 1" },
];
const bankData: any[] = [
  { value: 1, label: "Banco do Brasil" },
  { value: 2, label: "Bradesco" },
  { value: 3, label: "Itau" },
];
const accountData: any[] = [
  { value: 1, label: "Conta corrente" },
  { value: 2, label: "Poupança" },
];

interface FormFieldI {
  onNextStep: () => void;
  setIsFormValid: any;
}
const FormField: React.FC<FormFieldI & { formRef: React.RefObject<HTMLFormElement> }> = ({ onNextStep, setIsFormValid, formRef}) => {
  const [occupationalValue, setOccupationalValue] = useState("");

  if (!occupationalValue && occupationalData.length > 0) {
    setOccupationalValue(occupationalData[0]);
  }
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
      ref={formRef} 
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
      <BoxForm>
        <Label>
          <span>
            Banco:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                options={bankData}
                value={occupationalValue}
                onChange={setOccupationalValue}
                placeholder="Selecione uma profissional"
              />
            )}
          />
        </Label>

        <Label>
          <span>
            Tipo de conta:<RedAsterisk>*</RedAsterisk>
          </span>

          <Select
            options={accountData}
            value={occupationalValue}
            onChange={setOccupationalValue}
            placeholder="Selecione uma profissional"
          />
        </Label>
      </BoxForm>
      <BoxForm>
        <Label>
          <span>
            Agência:<RedAsterisk>*</RedAsterisk>
          </span>
          <Controller
            name="agency"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                active={errors.agency}
                placeholder="Digite aqui"
                type="number"
              />
            )}
          />
        </Label>

        <Label>
          <span>
            Conta com dígito: <RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                options={occupationalData}
                value={occupationalValue}
                onChange={setOccupationalValue}
                placeholder="Selecione uma profissional"
              />
            )}
          />
        </Label>
      </BoxForm>
      <BoxForm>
        <Label>
          <span>
            Tipo de pessoa:<RedAsterisk>*</RedAsterisk>
          </span>
          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                options={occupationalData}
                value={occupationalValue}
                onChange={setOccupationalValue}
                placeholder="Selecione uma profissional"
              />
            )}
          />
        </Label>

        <Label>
          <span>
            CPF Suplente:<RedAsterisk>*</RedAsterisk>
          </span>
          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                formatValue={cpf_mask}
                active={errors.cpf}
              />
            )}
          />
        </Label>

        <Label>
          <span>
            Telefone:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                formatValue={phone_mask}
                maxLength={16}
                active={errors.phone}
              />
            )}
          />
        </Label>
      </BoxForm>
      <BoxForm>
        <Label>
          <span>
            Nome completo:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="fullname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                placeholder="Digite aqui"
                minLength={2}
                active={errors.fullname}
              />
            )}
          />
        </Label>
      </BoxForm>
      <BoxForm>
        <Label>
          <span>
            CEP:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="cep"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                placeholder="Digite o CEP"
                formatValue={cep_mask}
                active={errors.cep}
              />
            )}
          />
        </Label>
        <Label>
          <span>
            Estado:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                options={occupationalData}
                value={occupationalValue}
                onChange={setOccupationalValue}
                placeholder="Selecione uma profissional"
              />
            )}
          />
        </Label>
        <Label>
          <span>
            Cidade:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                placeholder="Digite a cidade"
                formatValue={cep_mask}
                active={errors.cep}
              />
            )}
          />
        </Label>
      </BoxForm>

      <BoxForm>
        <Label>
          <span>
            Endereço:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                placeholder="Digite a cidade"
                formatValue={cep_mask}
                active={errors.cep}
              />
            )}
          />
        </Label>
        <Label style={{ flex: "0 1 50%" }}>
          <span>
            Número:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                placeholder="Digite a cidade"
                formatValue={cep_mask}
                active={errors.cep}
              />
            )}
          />
        </Label>
      </BoxForm>
    </ContainerForm>
  );
};
export default FormField;
