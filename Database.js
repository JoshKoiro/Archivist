var database = {};
//define database
database.data = [];
//define data array


//function to find size of database data array
database.size = function(table){
  if(table === undefined){
    return database.data.length;
} else {
  return database[table].length;
}
};

//function to add to database
database.add = function(component,table){
  if(table === undefined){
  var index = database.size();
  database.data[index] = component;
  return database;
} else {
  var index = database.size(table);
  database[table][index] = component;
  return database;
}
};

//function to list components
database.list = function(table){
  if(table === undefined){
  console.log(database.data);
} else {
  console.log(database[table]);
}
};

//function to remove component
database.remove = function(component){
  var index = database.data.indexOf(component);
  database.data.splice(index,1);
  console.log('removed ' + component + " from database");
  database.list();
};

database.newTable = function(name){
  database[name] = [];
  console.log(name+ " created as new database");
  return database;

};


//function calls

database.add('Josh');
database.add('Brian');
database.newTable('Contacts');
database.add('Something','Contacts');
database.list();
database.list('Contacts');
