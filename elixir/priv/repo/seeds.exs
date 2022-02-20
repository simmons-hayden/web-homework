# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Homework.Repo.insert!(%Homework.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Homework.Repo
alias Homework.Merchants.Merchant
alias Homework.Users.User
alias Homework.Transactions.Transaction
alias Homework.Companies.Company

require Integer

companies = Enum.to_list(1..4)
|> Enum.map(fn i -> %Company{ name: "Company #{i}", credit_line: 500000, available_credit: 500000 } end)
|> Enum.map(&Repo.insert!/1)

merchants = [
  %Merchant{ name: "Bojangles", description: "Better Chicken than anywhere"},
  %Merchant{ name: "Taco Bell", description: "Baja Blast or Bust"},
  %Merchant{ name: "Biscuitville", description: "The Best"},
  %Merchant{ name: "Cookout", description: "Anyting and everything"},
  %Merchant{ name: "Chipotle", description: "Maybe some bacteria"},
  %Merchant{ name: "Burger King", description: "Impossible Whopper Place"},
  %Merchant{ name: "Popeyes", description: "Dry Biscuits"}
] 
|> Enum.map(&Repo.insert!/1)

users = Enum.to_list(1..3)
|> Enum.map(fn i -> %User{ 
  first_name: "user-#{i}",
  last_name: "last-#{i}",
  company_id: Enum.random(companies).id
} end)
|> Enum.map(&Repo.insert!/1)

Enum.to_list(1..100)
|> Enum.map(fn i -> %Transaction{
    amount: i * 100,
    debit: Integer.is_even(i),
    credit: Integer.is_odd(i),
    description: "purchase #{i}",
    merchant_id: Enum.random(merchants).id,
    user_id: Enum.random(users).id,
    company_id: Enum.random(companies).id
} end)
|> Enum.each(&Repo.insert!/1)
