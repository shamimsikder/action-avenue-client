import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
        <Tabs>
            <TabList>
                {categories.map((category, index) => (
                    <Tab key={index}>{category.name}</Tab>
                ))}
            </TabList>

            {categories.map((category, index) => (
                <TabPanel key={index}>
                    {category.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex}>
                            <h2 className="text-xl font-bold mb-4">{subcategory.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {subcategory.toys.map((toy) => (
                                    <div key={toy.id} className="bg-white w-96 rounded-md shadow-md p-4 flex flex-col items-center">
                                        <img src={toy.picture} alt={toy.name} className="w-96 h-96 rounded-md object-cover mb-4"/>
                                        <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
                                        <p className="text-gray-600 mb-2">{toy.price}</p>
                                        <p className="text-gray-600 mb-2">Rating: {toy.rating}</p>
                                        <a  href={toy.detailsLink}  target="_blank"  rel="noopener noreferrer"  className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                            View Details
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </TabPanel>
            ))}
        </Tabs>
    </div>
  );
};

export default ShopByCategory;
