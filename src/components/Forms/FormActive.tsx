import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from '../Inputs/Select';
import Input from '../Inputs/Input';
import CheckoutOption from '../Inputs/CheckoutBox'; // Supondo que este é o caminho correto

import { schemaStepOne } from '@/utils/schemaStepOne';
import { cep_mask, cpf_mask, phone_mask } from '@/utils/masks';
import {
  BoxContainer,
  BoxForm,
  ContainerForm,
  Label,
  Title,
} from './Form.styles';

// Dados de exemplo
const occupationalData: any[] = [
  { value: 'value1', label: 'Valor 1' },
  { value: 'value2', label: 'Valor 2' },
];

interface FormActiveI {
  onNextStep: () => void;
  setIsFormValid: (isValid: boolean) => void;
}

const FormActive: React.FC<FormActiveI> = ({ onNextStep, setIsFormValid }) => {
  const [occupationalValue, setOccupationalValue] = useState('');

  const {
    control,
    handleSubmit,
    setValue, // Agora utilizando o setValue do useForm
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaStepOne),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setIsFormValid(true); // Exemplo de como você pode definir o form como válido
    onNextStep(); // Certifique-se de chamar a função corretamente
  };

  return (
    <ContainerForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <BoxForm>
        <Label>
          Profissional
          <Select
            options={occupationalData}
            value={occupationalValue}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setOccupationalValue(e.target.value)}
            placeholder="Selecione uma profissional"
          />
        </Label>
      </BoxForm>
      <Label>
        <Title>Forma de pagamento da cobrança:</Title>
        <BoxContainer>
          {occupationalData.map((option) => (
            <Controller
              key={option.value}
              name="selectedPayment"
              control={control}
              render={({ field }) => (
                <CheckoutOption
                  label={option.label}
                  selected={field.value === option.value}
                  onClick={() => {
                    setValue('selectedPayment', option.value); 
                  }}
                />
              )}
            />
          ))}
        </BoxContainer>
      </Label>
      <Label>
        <Title>Definir multas e juros para todos os boletos após o vencimento:</Title>
        <BoxContainer>
          {occupationalData.map((option) => (
            <Controller
              key={option.value}
              name="selectedPayment"
              control={control}
              render={({ field }) => (
                <CheckoutOption
                  label={option.label}
                  selected={field.value === option.value}
                  onClick={() => {
                    setValue('selectedPayment', option.value); 
                  }}
                />
              )}
            />
          ))}
        </BoxContainer>
      </Label>
      <Label>
        <Label>
        Valor da multa em %:*
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
        <BoxContainer>
          {occupationalData.map((option) => (
            <Controller
              key={option.value}
              name="selectedPayment"
              control={control}
              render={({ field }) => (
                <CheckoutOption
                  label={option.label}
                  selected={field.value === option.value}
                  onClick={() => {
                    setValue('selectedPayment', option.value); 
                  }}
                />
              )}
            />
          ))}
        </BoxContainer>
      </Label>
    </ContainerForm>
  );
};

export default FormActive;
