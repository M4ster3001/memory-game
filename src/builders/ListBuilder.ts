import { Card } from '../dtos'

class ListBuilder {
  private list

  constructor(list: Card[]) {
    this.list = list || []
  }

  createList(total: number) {
    const createListLoop = (keyPreffix: string) => {
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

    createListLoop('1')
    createListLoop('2')

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
