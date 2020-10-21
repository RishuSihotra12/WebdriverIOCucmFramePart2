Feature: Perform a Login

    Background:
        Given I'm on the login page
    
    Scenario:Login with default user
       When I log in with default user
       Then I shall be on the Flight finder page