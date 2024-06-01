document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id:1, name:'Beat - 01', img:'beat.jpg', price: 35000},
            {id:2, name:'Beat - 02', img:'beat2.jpg', price: 40000},
            {id:3, name:'Beat - 03', img:'beat3.jpg', price: 45000},
            {id:4, name:'Beat - 04', img:'beat4.jpg', price: 55000},
            {id:5, name:'Beatstreet - 01', img:'beatstreet.jpg', price: 65000},
            {id:6, name:'Beatstreet - 02', img:'beatstreet2.jpg', price: 65000},
            {id:7, name:'Scoopy - 01', img:'scoopy.jpg', price: 65000},
            {id:8, name:'Scoopy - 02', img:'scoopy2.jpg', price: 65000},
            {id:9, name:'Scoopy - 03', img:'scoopy3.jpg', price: 65000},
            {id:10, name:'Scoopy - 04', img:'scoopy4.jpg', price: 65000},
            {id:11, name:'Vario 125 - 01', img:'vario.jpg', price: 65000},
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){

            const cartItem = this.items.find((item) => item.id === newItem.id);

            if (!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            } else {
                this.items = this.items.map((item) => {
                    if (item.id !== newItem.id){
                        return item;
                    }else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id);

            if (cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if (item.id !== id) {
                        return item;
                    }else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if (cartItem.quantity === 1 ) {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    })
});

// Conversi Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}