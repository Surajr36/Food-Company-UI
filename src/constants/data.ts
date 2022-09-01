import images from './images';

const wines = [
   {
      title: 'Mango Juice',
      price: '₹156',
      tags: '500ml',
   },
   {
      title: 'Apple Juice',
      price: '₹189',
      tags: '350ml',
   },
   {
      title: 'Strawberry Milkshake',
      price: '₹160',
      tags: '500ml',
   },
   {
      title: 'Avocado',
      price: '₹300',
      tags: '500ml',
   },
   {
      title: 'Water Melon',
      price: '₹116',
      tags: '450ml',
   },
];

const cocktails = [
   {
      title: 'Old Fashioned',
      price: '₹820',
      tags: '120ml',
   },
   {
      title: 'Dry Martini',
      price: '₹520',
      tags: '90ml',
   },
   {
      title: 'Margarita',
      price: '₹900',
      tags: '100ml',
   },
   {
      title: 'Manhattan',
      price: '₹1020',
      tags: '140ml',
   },
   {
      title: 'Slow Mojito',
      price: '₹420',
      tags: '100ml',
   },
];

const awards = [
   {
      imgUrl: images.award02,
      title: 'Bib Gourmond',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
   },
   {
      imgUrl: images.award01,
      title: 'Rising Star',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
   },
   {
      imgUrl: images.award05,
      title: 'AA Hospitality',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
   },
   {
      imgUrl: images.award03,
      title: 'Outstanding Chef',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
   },
];
const data = { wines, cocktails, awards };
export default data;
