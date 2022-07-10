import * as zod from 'zod'

export const newAddressFormSchema = zod.object({
  zipCode: zod.string().min(8, 'Informe um CEP válido').max(8),
  street: zod.string().min(1, 'Informe o nome da rua'),
  houseNumber: zod
    .string()
    .min(1, 'Informe o número do endereço')
    .max(10, 'Informe o número do endereço'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro').max(100, 'Bairro muito longo'),
  city: zod.string().min(1, 'Informe a cidade').max(100, 'Cidade muito longa'),
  state: zod.string().min(1, 'Informe uma UF').max(2, 'Informe uma UF'),
})

export type AddressFormData = zod.infer<typeof newAddressFormSchema>
