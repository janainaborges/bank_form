import { useState } from "react";
import Select from "../Inputs/Select";

import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Inputs/Input";
import { schemaStepOne } from "@/utils/schemaStepOne";
import { cep_mask, cpf_mask, phone_mask } from "@/utils/masks";
import { BoxForm, ContainerForm, Label, RedAsterisk } from "./Form.styles";
import { updateFormData } from "@/provider/slices/formSlice";

const occupationalData: any[] = [
  { value: 1, label: "Valor 1" },
];
const bankData: any[] = [
  { value: "Banco do Brasil" },
  { value: "Bradesco" },
  { value: "Itau" },
];
const accountData: any[] = [
  { value: "Conta corrente" },
  { value: "Poupança" },
];
const personData: any[] = [
  { value:  "Pessoa Física" },
  { value:  "Pessoa Jurídica" },
];
const stateData: any[] = [
  { value:  "Acre" },
  { value:  "Minas Gerais" },
  { value:  "Distrito Federal" },
];
interface FormFieldProps {
  onNextStep: () => void;
  setIsFormValid: (isValid: boolean) => void;
  formRef: React.RefObject<HTMLFormElement>; 
}
const FormField: React.FC<FormFieldProps & { formRef: React.RefObject<HTMLFormElement> }> = ({ onNextStep, setIsFormValid, formRef}) => {
  const [occupationalValue, setOccupationalValue] = useState("");
  const [bankValue, setBankValue] = useState("");
  const [accountValue, setAccountValue] = useState("");


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaStepOne),
  });

  const onSubmit = (data: Record<string, any>, e: any) => {
    console.log(data, "cdcecedcecedcec");
    if (e) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      onNextStep();
      dispatch(updateFormData(data));
    }
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
            name="bank"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                options={bankData}
                onChange={(selectedOption: any) => field.onChange(selectedOption)}
                placeholder="Selecione um banco"
                active={errors.bank}
              />
            )}
          />
        </Label>

        <Label>
          <span>
            Tipo de conta:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="account"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                options={accountData}
                {...field}
                onChange={(selectedOption: any) => field.onChange(selectedOption)}
                placeholder="Selecione um banco"
                active={errors.account}
              />
            )}
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
            name="tag"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
              active={undefined} {...field}
              setValue={field.onChange}
              placeholder="Digite aqui"
              type="number"    
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
            name="person"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
              {...field}
              onChange={(selectedOption: any) => field.onChange(selectedOption)}
                active={errors.person}
                options={personData}
                placeholder="Selecione..."
              />
            )}
          />
        </Label>

        <Label>
          <span>
            CPF:<RedAsterisk>*</RedAsterisk>
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
                placeholder="000.000.000-00"
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
                placeholder="(00)0.0000-0000"
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
                placeholder="00000-000"
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
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
              {...field}
              onChange={(selectedOption: any) => field.onChange(selectedOption)}
                active={errors.state}
                options={stateData}
                placeholder="Selecione..."
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
                placeholder="Digite aqui"
                active={errors.city}
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
            name="Address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                placeholder="Digite aqui"
                active={errors.Address}
              />
            )}
          />
        </Label>
        <Label style={{ flex: "0 1 50%" }}>
          <span>
            Número:<RedAsterisk>*</RedAsterisk>
          </span>

          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                setValue={field.onChange}
                placeholder="Digite aqui"
                active={errors.number}
              />
            )}
          />
        </Label>
      </BoxForm>
      <button type="submit">ok </button>
    </ContainerForm>
  );
};
export default FormField;
function dispatch(arg0: { payload: Record<string, any>; type: "form/updateFormData"; }) {
  throw new Error("Function not implemented.");
}

