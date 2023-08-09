//conditional types
interface Animal{
        live(): void
}
interface Dog extends Animal{
        woof(): void
}

type Nature = Dog extends Animal? number: string

type Nature2 = Rabbit extends Animal? number: string