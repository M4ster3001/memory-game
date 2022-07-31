import { Card } from '../dtos'

const PREFIXES = ['ts', 'ls', 'az', 'ou', 'lw']

class ListBuilder {
  private list

  constructor(list: Card[]) {
    this.list = list || []
  }

  resetList() {
    this.list = []
    return this
  }

  createList(total: number) {
    const createListLoop = () => {
      for (let d = 0; d < 2; d++) {
        const keyPreffix = PREFIXES[Math.floor(Math.random() * PREFIXES.length)]
        for (let i = 1; i <= total; i++) {
          this.list.push({
            id: i,
            key: `${keyPreffix}-${i}`,
            name: `Carta ${i}`,
            isActive: false,
            hasMatch: false
          })
        }
      }
    }

    createListLoop()

    return this
  }

  shuffle() {
    const newList = this.list.slice()

    for (let i = newList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      ;[newList[i], newList[j]] = [newList[j], newList[i]]
    }

    this.list = newList

    return this
  }

  build() {
    return this.list
  }
}

export default ListBuilder
