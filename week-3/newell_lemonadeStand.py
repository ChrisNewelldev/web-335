"""
Author: Chris Newell
Date: October 6, 2025
File Name: newell_lemonadeStand.py
Description: This program simulates a lemonade stand by calculating the total
cost and profit from selling lemonade using Python functions.
"""

# Function to calculate the total cost of making lemonade
def calculate_cost(lemons_cost, sugar_cost):
    """Calculate total cost based on lemons and sugar."""
    total_cost = lemons_cost + sugar_cost
    return total_cost

# Function to calculate profit from selling lemonade
def calculate_profit(lemons_cost, sugar_cost, selling_price):
    """Calculate profit based on selling price minus total cost."""
    total_cost = calculate_cost(lemons_cost, sugar_cost)
    profit = selling_price - total_cost
    return profit

# Test variables
lemons_cost = 4.00
sugar_cost = 2.50
selling_price = 12.00

# Calling the functions and displaying results
total_cost = calculate_cost(lemons_cost, sugar_cost)
profit = calculate_profit(lemons_cost, sugar_cost, selling_price)

# Printing formatted output
print(f"Cost of lemons: ${lemons_cost}")
print(f"Cost of sugar: ${sugar_cost}")
print(f"Total cost: ${total_cost}")
print(f"Selling price: ${selling_price}")
print(f"Profit: ${profit}")
