export interface SchoolConstructor {
  (): void
  get ACCOUNTS_KEY(): string
  get CURRENT_USER_KEY(): string
  accs: Account[]
  get accounts(): Account[]
  initStorage(): void
  login(id: string, password: string): boolean
  sync(): void
  addAccount(name: string, id: string, password: string, tel: string): boolean
  hasID(id: string): boolean
  findID(name: string, tel: string): string | null
}

interface Account {
  name: string
  id: string
  password: string
  tel: string
}
