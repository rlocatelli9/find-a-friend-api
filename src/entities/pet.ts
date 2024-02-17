export type PetProps = {
  name: string
  description: string
  age: number
  deficiencies: string[]
  energy: number
  available: boolean
  type: 'CACHORRO' | "GATO" | "OUTROS"
  space: 'REDUZIDO' | "MODERADO" | "AMPLO"
  size: 'PEQUENO' | "MEDIO" | "GRANDE" | "GIGANTE"
}

export class Pet {
  private props: PetProps

  constructor(props: PetProps) {
    this.props = props
  }

  get type(){
    return this.props.type
  }

  get name(){
    return this.props.name
  }

  get description(){
    return this.props.description
  }

  get age(){
    return this.props.age
  }

  get disabilities(){
    return this.props.disabilities
  }

  get health(){
    return this.props.health
  }

  get energy(){
    return this.props.energy
  }

  get space(){
    return this.props.space
  }

  get size(){
    return this.props.size
  }

}
