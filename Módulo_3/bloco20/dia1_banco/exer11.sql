SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees SET PHONE_NUMBER = replace(PHONE_NUMBER,'515','777') WHERE PHONE_NUMBER like "515%";
