import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Henok',
      email: 'hw93gojj@gmail.com',
      password: bcrypt.hashSync('1196', 10), // Added salt rounds for better security
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'Jacket',
      slug: 'jacket',
      category: 'Coat',
      image: '_DSC0319.JPG',
      price: 100,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular jacket',
      isFeatured: true,
      banner: '/images/_DSC0319.JPG',
    },
    {
      name: 'Shoes', // Corrected typo
      slug: 'shoes', // Slug should also be corrected
      category: 'Shoes',
      image: 'photo_2024-08-26_14-23-05.jpg',
      price: 100,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular pair of shoes', // Improved description
      isFeatured: true,
      banner: '/images/photo_2024-08-26_14-23-05.jpg', // Corrected banner
    },
    {
      name: 'Shirt',
      slug: 'shirt',
      category: 'Shirts',
      image: 'photo_2024-08-26_07-47-06.jpg',
      price: 40,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 0,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/photo_2024-08-26_07-47-06.jpg', // Corrected banner
    },
  ],
}

export default data
