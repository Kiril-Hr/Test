export type ItemsProps = {
    id: number,
    title: string,
    descr: string,
    price: number,
    currency: string,
}

export const exchangeItems:ItemsProps[] = [
    {
        id: 1,
        title: 'Iphone 12',
        descr: 'This is iphone 12',
        price: 850,
        currency: 'USD',
    },
    {
        id: 2,
        title: 'Iphone 11',
        descr: 'This is iphone 11',
        price: 750,
        currency: 'USD',
    },
    {
        id: 3,
        title: 'Iphone 10',
        descr: 'This is iphone 10',
        price: 650,
        currency: 'USD',
    },
]

export const getPricesObject = (array:ItemsProps[]) => array.reduce(
    (object, item) => ({
        ...object,
        [item.id]: item.price,
    }),
    {}
)