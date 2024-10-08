"""
Student's full name
Aug 8, python classes 
"""

print("---- Example 1: class definition ----")
class MyClass:
    x = 5
    
#calling class MyClass
myclass1 = MyClass()
print("The complete class ", myclass1)
print("Property of MyClass ", myclass1.x)

print("---- Example 2: initialized a class ----")
class Person:
    #initialize class properties' value
    def __init__(self, name, age):
        self.name = name
        self.age = age
        # set a class property
        self.luckynumber = 88
        
    # return string
    def __str__(self):
        return f"User {self.name} is {self.age} years-old"
    
    # method
    def mymethod(self):
        print(f"{self.name}' lucky number is {self.luckynumber}")
        
        
#create an object of class person
user1 = Person("Ann", 23)

print(f"Result --> {user1}")
user1.mymethod()
print(f"Class property --> {user1.luckynumber}")

# modify class property's value
user1.age = 31
print(f"Result --> {user1}")

# empty class
class Schedule:
    pass

print("---- Example 3: class with adjustable methods ----")
class Number:
    def __init__(self, num):
        self.num = num 
        
    # accessible property
    num_symbol = '$'
    
    # define a method to print the number
    def doublenumber(self):
        self.num = self.num* 2
    
    # return string of the class
    def __str__(self):
        return f"The final number is {self.num}"
        
# create an object of class Number
n1 = Number(12)

# Print the object of class Number
print(f"Object of class Number --> {n1}")

# call method doublenumber()
n1.doublenumber()
# Print the object of class Number
print(f"Object of class Number --> {n1}")
# call method doublenumber()
n1.doublenumber()
# Print the object of class Number
print(f"Object of class Number --> {n1}")

print("---- Example 4: class with private propety ----")
class Chair:
    def __init__(self, height, width, length):
        self.height = height
        self.width = width
        self.length = length
        self.shippingcostfee = 0.2
        self.totalshippingcost = 0
        
    #accessible 'private' property
    _chair_color = 'brown'
    
    # method to calculate the total dimension
    def total_dimension(self):
        return self.height * self.length * self.width
        
    # method to caluclate the toal shipping cost
    def total_shipping(self):
        self.totalshippingcost = self.shippingcostfee * self.totaldimension
    
    # return string of the class
    def __str__(self):
        return f"The total dimension for the {self._chair_color} chair is ${self.total_dimension()}"
    
# create an object of the class
chair1 = Chair(3, 4, 5)
# print the object 
print(f"Result for {chair1._chair_color} chair with dimension {chair1}")