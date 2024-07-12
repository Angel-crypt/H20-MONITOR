import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";
import Error "mo:base/Error";

actor H2OMonitor {
    // Define tipos
    type WaterMeter = {
        id: Text;
        location: Text;
        usage: Nat;
        status: Text;
    };
    type User = {
        id: Principal;
        name: Text;
    };
    type Admin = Principal;
    type Registration = {
        id: Principal;
        name: Text;
    };

    // Inicializar almacenamiento
    var users = HashMap.HashMap<Principal, User>(0, Principal.equal, Principal.hash);
    var admins = HashMap.HashMap<Principal, Admin>(0, Principal.equal, Principal.hash);
    var waterMeters = HashMap.HashMap<Text, WaterMeter>(0, Text.equal, Text.hash);

    // Función para registrar un nuevo usuario
    public shared (msg) func registerUser(name: Text) : async User {
        let user: Principal = msg.caller;
        let newUser: User = { id = user; name = name };
        users.put(user, newUser);
        Debug.print("Usuario <<" # name # ">> registrado exitosamente con ID <<" # Principal.toText(user) # ">>.");
        return newUser;
    };

    // Función para registrar un nuevo admin
    public shared (msg) func registerAdmin() : async Admin {
        let admin: Principal = msg.caller;
        admins.put(admin, admin);
        Debug.print("Administrador registrado exitosamente con ID <<" # Principal.toText(admin) # ">>.");
        return admin;
    };

    // Función para identificar al llamante
    public query ({ caller }) func whoami() : async Principal {
        return caller;
    };

    // Función de administrador para agregar un nuevo medidor de agua
    public shared (msg) func addWaterMeter(waterMeter: WaterMeter) : async WaterMeter {
        let admin: Principal = msg.caller;
        if (admins.get(admin) != null) {
            waterMeters.put(waterMeter.id, waterMeter);
            Debug.print("Medidor de agua <<" # waterMeter.id # ">> agregado exitosamente por <<" # Principal.toText(admin) # ">>.");
            return waterMeter;
        } else {
            Debug.print("El llamante no es un administrador.");
            throw Error.reject("El llamante no es un administrador.");
        }
    };

    // Función de usuario para ver su medidor de agua
    public query (msg) func viewWaterMeter(id: Text) : async ?WaterMeter {
        let user: Principal = msg.caller;
        if (users.get(user) != null) {
            return waterMeters.get(id);
        } else {
            Debug.print("Usuario no encontrado en el HashMap.");
            return null;
        }
    };

    // Función de administrador para ver todos los medidores de agua
    public query (msg) func viewAllWaterMeters() : async [(Text, WaterMeter)] {
        let admin: Principal = msg.caller;
        if (admins.get(admin) != null) {
            let meterEntries = Iter.toArray<(Text, WaterMeter)>(waterMeters.entries());
            return meterEntries;
        } else {
            Debug.print("El llamante no es un administrador.");
            throw Error.reject("El llamante no es un administrador.");
        }
    };

    // Función de administrador para actualizar un medidor de agua
    public shared (msg) func updateWaterMeter(id: Text, waterMeter: WaterMeter) : async Text {
        let admin: Principal = msg.caller;
        if (admins.get(admin) != null) {
            let currentWaterMeter = waterMeters.get(id);
            switch currentWaterMeter {
                case (null) {
                    Debug.print("Medidor de agua no encontrado.");
                    return "Medidor de agua no encontrado";
                };
                case (?existingWaterMeter) {
                    waterMeters.put(id, waterMeter);
                    Debug.print("Medidor de agua actualizado exitosamente.");
                    return "Medidor de agua actualizado exitosamente";
                };
            };
        } else {
            Debug.print("El llamante no es un administrador.");
            return "El llamante no es un administrador";
        }
    };

    // Función de administrador para eliminar un medidor de agua
    public shared (msg) func deleteWaterMeter(id: Text) : async Text {
        let admin: Principal = msg.caller;
        if (admins.get(admin) != null) {
            let waterMeter = waterMeters.get(id);
            switch waterMeter {
                case (null) {
                    Debug.print("Medidor de agua no encontrado.");
                    return "Medidor de agua no encontrado.";
                };
                case (?existingWaterMeter) {
                    waterMeters.delete(id);
                    Debug.print("Medidor de agua eliminado exitosamente.");
                    return "Medidor de agua eliminado exitosamente.";
                };
            };
        } else {
            Debug.print("El llamante no es un administrador.");
            return "El llamante no es un administrador.";
        }
    };

};
