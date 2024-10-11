from datetime import datetime
import college

# Correct date format and variable calculation
when_i_first_came_to_college = datetime(2022, 8, 14) 
# Scared and shy of how my life would turn out
but_now_that_I_have_lived_here_for_long_enough = datetime.today() 
i_am_not_that_scared_or_naive_anymore = (but_now_that_I_have_lived_here_for_long_enough - when_i_first_came_to_college).days

# in my early day, I used to convert pennies in my mind as
def __each_dollar_to_rupee(was_an_expense_to_bear):
    for_the_cost_of_my_dreams = 83.96  # rupees without taxes
    guilt = was_an_expense_to_bear * for_the_cost_of_my_dreams
    return guilt

# so at times, homesickness was all i felt
# as i did these calculations in my head
def __of_weather_today(fahrenheit):
    celsius = (fahrenheit - 32) * 5 / 9
    return celsius

def __or_pounds_to_kg_conversion(pounds):
    kg = pounds * 0.45
    return kg

# as time passed, i grew up
# and eventually, found my home here <3
as_i_could_guess_what_farenheit_meant = {
    'super_hot': 120,
    'sunny': 60,
    'cold': 40,
    'super_cold': 20
}

and_what_slangs_meant_here = {
    'lost_in_the_sauce': 'confused',
    'period': 'omg',
    'sit_on_this_one': 'change of plans'
}

# as time passed, i grew up
# how their 'th' was loud and out
# and voices were low and strong
def __but_who_am_i_after_all_these_changes(american_me, indian_me):
    # when i stay here for too long
    if american_me > indian_me:
        feelings_of_being = {
            'whitewashed': 100,
            'missing_indian_festivals': 100,
            'cause_of_absence': ['too much homework', 'or', 'busy working'],
            'but_missing_american_festivals': 0,
            'reason': 'found my community there instead'
        }
        return feelings_of_being

    # when i stay in india for too long
    elif indian_me > american_me:
        feelings_of_being = {
            'whitewashed': 0,
            'left_out_because_i_struggle_to_understand_american_culture': 100,
            'as_people_sometimes_struggle_to_understand_me': 50,
            'but_i_found_my_people': 100,
            'and_i_had_missed_them_all_summer': 100
        }
        return feelings_of_being

    # but i am truly at zen
    else:
        feelings_of_being = {"satisfied with who am i without having an existential crisis"}
        return feelings_of_being

print("so who i am after all these changes?")
