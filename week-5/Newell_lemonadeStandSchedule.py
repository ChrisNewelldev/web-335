"""
Author: Chris Newell
Date: 2025-10-12
File Name: Newell_lemonadeStandSchedule.py
Description: This program demonstrates Python conditionals, lists, and loops by
             generating a weekly schedule for a lemonade stand.
"""

# ---- Step 1 & 2: Define a list of at least 5 tasks related to running a lemonade stand ----
tasks = [
    "Buy lemons and supplies",
    "Make fresh lemonade",
    "Open stand and sell",
    "Count earnings and record sales",
    "Clean up and restock"
]

# ---- Step 3: Use a for loop to iterate over the list of tasks and print them ----
print("Tasks for the Lemonade Stand:")
for task in tasks:
    # Normal-level comment: printing each task from the tasks list
    print(f" - {task}")

print()  # blank line for readability

# ---- Step 4: Create a list of days (Sunday through Saturday) ----
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# ---- Step 5: Iterate over days and use if...else to display the task for each day ----
print("Weekly Schedule:")
for i, day in enumerate(days):
    if day in ["Saturday", "Sunday"]:
        # Weekend condition: display rest message
        print(f"{day}: Day off — rest and recharge.")
    else:
        # Weekday: cycle through tasks to assign a task to the day
        task_for_day = tasks[i % len(tasks)]
        print(f"{day}: {task_for_day}")
