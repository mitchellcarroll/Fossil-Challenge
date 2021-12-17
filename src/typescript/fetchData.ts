import { FossilRecord, FossilResults } from './types'

export const fetchData = () => {
  window
    .fetch('https://acnhapi.com/v1/fossils')
    .then(response => response.json())
    .then((data: FossilResults) => {
      const results = Object.entries(data)

      const filteredList: [string, FossilRecord][] = []

      results.forEach(r => {
        if (r[1].price < 3000) {
          filteredList.push(r)
        }
      })

      populateTemplate(filteredList)
    })
    .catch((error: Error) => {
      console.log(error)
    })
}

export const populateTemplate = (filteredList: [string, FossilRecord][]) => {
  const template = document.querySelector('template')
  const destination = document.querySelector('.fossil-list')

  if (template != null && template.content != null) {
    filteredList.forEach(fossilRecord => {
      const clone = template.content.cloneNode(true) as HTMLElement

      const imgEle: HTMLImageElement | null = clone.querySelector('.fossil-img')
      if (imgEle != null) {
        imgEle.src = fossilRecord[1].image_uri
      }

      const titleEle = clone.querySelector('.title')

      if (titleEle != null) {
        titleEle.textContent = fossilRecord[1].name['name-USen']
      }

      const desciptionEle = clone.querySelector('.description')

      if (desciptionEle != null) {
        desciptionEle.textContent = fossilRecord[1]['museum-phrase']
      }

      const priceEle = clone.querySelector('.price')

      if (priceEle != null) {
        priceEle.textContent = `$${fossilRecord[1].price}`
      }

      if (destination != null) {
        destination.appendChild(clone)
      }
    })
  }
}
