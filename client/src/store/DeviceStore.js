import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types =[
            {id: 1, name: 'yoyo'},
            {id: 2, name: 'gaga'},
        ]
        this._brands = [
            {id: 1, name: 'haha'},
            {id: 2, name: 'meme'},
        ]
        this._devices = [
            {id: 1, name: 'phone', price: 200, rating: 5, img:'https://pixabay.com/photos/iphone-smartphone-apps-apple-inc-410324/'},
            {id: 2, name: 'phone4' , price: 400, rating: 5, img:'https://pixabay.com/photos/iphone-smartphone-apps-apple-inc-410324/'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices 
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}