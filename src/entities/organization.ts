export type AddressOrgProps = {
  country: string
  uf: string
  city: string
  latitude: number
  longitude: number
  zip_code: number
  complement?: string
}

export type OrganizationProps = {
  name: string
  email: string
  description?: string
  cnpj?:number
  address:AddressOrgProps
  phone: number
}

export class Organization {
  private props: OrganizationProps

  constructor(props: OrganizationProps) {
    this.props = props
  }

  get name(): string { return this.props.name }

  get email(): string { return this.props.email }

  get description(): string | undefined{ return this.props.description }

  get phone(): number { return this.props.phone}

  get cnpj(): number | undefined { return this.props.cnpj}

  get address(): AddressOrgProps { return this.props.address}

}


