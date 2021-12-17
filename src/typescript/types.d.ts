export interface FossilRecord {
    'file-name': string
  name: {
    'name-USen': string
    'name-EUen': string
    'name-EUde': string
    'name-EUes': string
    'name-USes': string
    'name-EUfr': string
    'name-USfr': string
    'name-EUit': string
    'name-EUnl': string
    'name-CNzh': string
    'name-TWzh': string
    'name-JPja': string
    'name-KRko': string
    'name-EUru': string
  }
  price: number
  'museum-phrase': string
  image_uri: string
}

export interface FossilResults {
  name: FossilRecord
}
