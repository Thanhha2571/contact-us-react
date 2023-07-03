import './Header.css'
import Offices from './Offices'
import Contact1 from './Contact1'
const Main = (props) => {
    const { handleMenuClose } = props
    const offices = [
        {   
            url: 'https://aht-ito.merket.io/static/1c8ae4edb76ca222e15b9b17bf378000/66bdd/Rectangle-5680-6.webp',
            heading: 'Vietnam - Hanoi (Head Office)',
            address: '8F, MITEC Building, Duong Dinh Nghe Street, Yen Hoa, Cau Giay, Hanoi',
            phone: '(+84)24 3795 5813',
            country: 'HN'
        },
        {
            url: 'https://aht-ito.merket.io/static/8ab24ad9f544526c2379108847e4db17/14d1a/Rectangle-5680-1-12.webp',
            heading: 'Vietnam - Ho Chi Minh City Office',
            address: '6F, Vietdata Building, 232 - 234 Ung Van Khiem Street, Ward 25 , Binh Thanh, Ho Chi Minh City',
            phone: '(+84)24 3795 5813',
            country: 'HCM'
        },
        {
            url: 'https://aht-ito.merket.io/static/952cf5ffd044a816e9cb7a2b339242fc/66bdd/Rectangle-5680-2-5.webp',
            heading: 'Australia Office',
            address: '6 Kingsborough Way, Zetland, 2017 Sydney',
            phone: '(+61) 413396603',
            country: 'Australia'
        },
        {
            url: 'https://aht-ito.merket.io/static/6e6ad7a97c7944dd9a37d9dd0e14330d/14d1a/Rectangle-5680-3-6.webp',
            heading: 'Japan Office',
            address: 'Room 502, The Hub, 5F Hasegawa Building, 1-9-7 Mizunokuchi, Takatssu-ku, Kanagawa-shi, Kanagawa-ken, 213-0001',
            phone: '(+84)24 3795 5813',
            country: 'Japan'
        },
        {
            url: 'https://aht-ito.merket.io/static/e3e31147365fb83f12366d9bf5033a2a/66bdd/Rectangle-5680-4-4.webp',
            heading: 'United States Office',
            address: '7505 Tuscany Ln San Diego California 92126',
            country: 'America'
        },
        {
            url: 'https://aht-ito.merket.io/static/723e5eb4a8e71ef4b3bcfe0597e8d9c9/66bdd/Rectangle-5680-5-2.webp',
            heading: 'Germany Office',
            address: 'Prignitzstr. 6 15366 Hoppegarten, Deutschland',
            phone: '(+49)1515 9158888',
            country: 'Germany'
        },

    ]
    return (
        <div onMouseLeave={handleMenuClose} className="main">
            <Contact1/>
            <div className='offices'>
                {offices.map(({ url, heading, address, phone, country }) => <Offices heading={heading} address={address} image={url} phone ={phone} country ={country} />)}
            </div>
        </div>
    )
}

export default Main