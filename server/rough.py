sales = [
    {"customer":"aditya","product":"PS5","price":55000,"city":"pune"},
    {"customer":"babar","product":"PS5","price":55000,"city":"pune"},
    {"customer":"nupur","product":"PS6","price":70000,"city":"mumbai"},

    {"customer":"rohit","product":"Xbox Series X","price":52000,"city":"delhi"},
    {"customer":"sneha","product":"Nintendo Switch","price":32000,"city":"bangalore"},
    {"customer":"karan","product":"PS5","price":55000,"city":"hyderabad"},
    {"customer":"megha","product":"Gaming PC","price":120000,"city":"mumbai"},
    {"customer":"arjun","product":"PS4","price":30000,"city":"pune"},
    {"customer":"pooja","product":"Xbox Series S","price":35000,"city":"chennai"},
    {"customer":"rahul","product":"PS5","price":55000,"city":"kolkata"},
    {"customer":"neha","product":"Gaming Laptop","price":95000,"city":"bangalore"},
    {"customer":"amit","product":"VR Headset","price":45000,"city":"pune"},
    {"customer":"tanvi","product":"PS6","price":70000,"city":"mumbai"},
    {"customer":"vikas","product":"Nintendo Switch","price":32000,"city":"ahmedabad"},
    {"customer":"ishita","product":"PS5","price":55000,"city":"delhi"}
]


#Which city generated the highest revenue 

grouped_total_sales = {}

for sale in sales:
    city = sale["city"]
    price = sale["price"]

    if city in grouped_total_sales:
        grouped_total_sales[city] += price
    else:
        grouped_total_sales[city] = price

print(grouped_total_sales)

#Which city generated the highest revenue 
top_city = None
top_revenue = 0

for city in grouped_total_sales:
    max_revenue = grouped_total_sales[city]
    if max_revenue > top_revenue:
        top_revenue = max_revenue
        top_city = city

print()
print(f"Top city: {top_city}, Top revenue: {top_revenue}")   