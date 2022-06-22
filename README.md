# IRD-Projet-2.0


# Project Title

Plateforme web d'imageries médicales




## Running Tests

- Importer API-Ressources depuis le dépôt IRD-Project 2.0
puis initialiser les dépendances avec la commande:
```bash
  npm install
```
- Pour excuter le script 

```bash
    npm start
```    

## API Reference

#### Repertoire Racine
```http
  http://localhost:3000/
```
### METADATA

#### MODEL
| METADATA Schema | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `created_by` | `string` | **NOT REQUIRED** |
| `last_updated_by` | `string` | **NOT Required** |
| `timestamps` | `object` | **NOT REQUIRED fields :{created_at, last_updated_at}** |


### DATASET 

#### MODEL
| Dataset Schema | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `metadata_id` | `string` | **Foreign Key** |
| `path` | `string` | **NOT Required** |
| `name` | `string` | **Required - UNIQUE**. |
| `description` | `string` | **NOT Required**.  |



***
- getAllDataset() 
```javascript
function getAllDataset() {
    return allDataset
    ## Cette fonction permet d'afficher 
    toutes les pathologies
}
```
- URL pour afficher toutes les pathologies
```http
  GET /dataset/getAll
```
***
- getOneDataset() 
```javascript
function getOneDataset(){
    return
    ## getOneDataset affiche la pathologie
    correspondant au Parameter datasetId 
    
} 
```
- URL pour rechercher et afficher une pathologie
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `datasetId` | `string` | **Required**.  |

```http
  GET /dataset/getOne/${datasetId}
```
***
- addOneDataset()
```javascript
function addOneDataset(){
    return
    ## addOneDataset permet d'ajouter 
    une pathologie
    
} 
```
- URL pour ajouter une pathologie
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `createrId` | `string` | **Required**.  |

```http
  POST /dataset/postOne/${createrId}
```
***
- updateOneDataset()
```javascript
function updateOneDataset(){
    return
    ## updateOneDataset permet de modifier 
    une pathologie
    
} 
```
- URL pour modifier une pathologie
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `updaterId` | `string` | **Required**  |
| `datasetId` | `string` | **Required** |

```http
  PUT /dataset/updaterOne/${updaterId}/${datasetId}
```
***
- removeOneDataset()
```javascript
function removeOneDataset(){
    return
    ##  removeOneDataset permet de supprimer 
    une pathologie
    
} 
```
-   URL pour supprimer une pathologie
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `deleteId` | `string` | **Required**  |

```http
  DELETE /dataset/deleteOne/${deleteId}
```


### PATIENT

#### MODEL

| Patient Schema | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `doctor_id` | `string` | **Foreign Key Required** |
| `metadata_id` | `string` | **Foreign Key** |
| `firstname` | `string` | **Required**. |
| `lastname` | `string` | **Required**. |
| `numberPatient` | `string` | **NOT Required**.  |
| `dateOfBirth` | `date` | **NOT Required**.  |
| `cni` | `string` | **NOT Required**.  |
| `nationality` | `string` | **NOT Required**.  |
| `sex` | `string` | **NOT Required values :{'M', 'F'}**.  |
| `address` | `object` | **NOT Required fields:{country, city, address}**.  |
| `phone` | `string` | **NOT Required**.  |
| `state` | `boolean` | **NOT Required**.  |

***
- getAllPatient() 
```javascript
function getAllPatient() {
    return 
    ## Cette fonction permet d'afficher 
    tous les patients suivis
}
```
- URL pour afficher toutes les patients
```http
  GET /patient/getAll
```
***

- getSinglePatient()

```javascript
function getSinglePatient() {
    return 
    ## Cette fonction permet de retrouver un patient 
    par son Id
    
}
```

- URL pour afficher un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patientId` | `string` | **Required**  |

```http
  GET /patient/getOne/${patientId}
```
***
- recordPatient()

```javascript
function recordPatient() {
    return 
    ## Cette fonction permet d'enregistrer un patient 
    
}
```

- URL pour ajouter un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `createrId` | `string` | **Required**  |

```http
  POST /patient/postOne/${createrId}
```
***

- updatePatient()
```javascript
function updatePatient() {
    return 
    ## Cette fonction permet de modifier les
    informations d'un patient 
    
}
```
- URL pour modifier un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `updaterId` | `string` | **Required**  |
| `patientId` | `string` | **Required**  |

```http
  PUT /patient/updaterOne/${updaterId}/${patientId}
```
***
- updateDoctor()
```javascript
function updateDoctor() {
    return 
    ## Cette fonction permet de modifier les
    informations du medecin d'un patient 
    
}
```
- URL pour modifier les infos du medecin en charge du patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `updaterId` | `string` | **Required**  |
| `patientId` | `string` | **Required**  |
| `doctorId` | `string` | **Required**  |

```http
  PUT /patient/updateDoctor/${updaterId}/${doctorId}/${patientId}
```
***

- deletePatient()
```javascript
function deletePatient() {
    return 
    ## Cette fonction permet de supprimer les
    informations d'un patient y compris ses ecgs
    
}
```
- URL pour supprimer le patient .ie les infos  du patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `updaterId` | `string` | **Required**  |
| `doctorId` | `string` | **Required**  |
| `patientId` | `string` | **Required**  |

```http
  DELETE /patient/updateDoctor/${updaterId}/${doctorId}/${patientId}
```


### ECG

#### MODEL


| Patient Schema | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `dataset_id` | `string` | **Foreign Key Required** |
| `metadata_id` | `string` | **Foreign Key** |
| `patient_id` | `string` | **Required**. |
| `filename` | `string` | **UNIQUE**. |
| `filepath` | `string` | **UNIQUE**.  |
| `state` | `boolean` | **NOT Required**.  |

***
- getAllEcg() 
```javascript
function getAllEcg() {
    return 
    ## Cette fonction permet d'afficher 
    tous les ecgs des patients
}
```
- URL pour effectuer la requete
```http
  GET /ecg/getAll
```
***
- getEcgByDataset() 
```javascript
function getEcgByDataset() {
    return 
    ## Cette fonction permet d'afficher 
    tous les ecgs dans une pathologie donnee au prealable
}
```
- URL pour effectuer la requete
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `datasetId` | `string` | **Required**  |

```http
  GET /ecg/getByDataset/${datasetId}
```
***
- getEcgByPatient() 
```javascript
function getEcgByPatient() {
    return 
    ## Cette fonction permet d'afficher 
    tous les ecgs d'un patient dont on a fourni l'identifiant
}
```
- URL pour afficher les ecgs d'un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patientId` | `string` | **Required**  |

```http
  GET /ecg/getbyPatient/${patientId}
```
***
- getOneEcg() 
```javascript
function getOneEcg() {
    return 
    ## Cette fonction permet de retrouver un ecg en 
    fournissant l'id de l'ecg.
}
```
- URL pour afficher les ecgs d'un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ecgId` | `string` | **Required**  |

```http
  GET /ecg/getOne/${ecgId}
```
***
- addOneEcg()
```javascript
function addOneEcg() {
    return 
    ## Cette fonction permet d'ajouter un ecg !
}
```
- URL pour ajouter un ecg pour un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `createrId` | `string` | **Required**  |
| `datasetId` | `string` | **Required**  |
| `patientId` | `string` | **Required**  |

```http
  POST /ecg/postOne/${createrId}/${datasetId}/${patientId}
```

***
- updateOneEcg()
```javascript
function updateOneEcg() {
    return 
    ## Cette fonction permet de modifier les infos d'un ecg !
}
```
- URL pour modifier un ecg concernant un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `updaterId` | `string` | **Required**  |
| `datasetId` | `string` | **Required**  |
| `patientId` | `string` | **Required**  |
| `ecgId` | `string` | **Required**  |

```http
  PUT /ecg/updateOne/${updaterId}/${datasetId}/${patientId}/${ecgId}
```

***
- deleteOneEcg()
```javascript
function deleteOneEcg() {
    return 
    ## Cette fonction permet de supprimer les
    ecgs d'un patient    
}
```
- URL pour supprimer les ecgsd'un patient
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ecgId` | `string` | **Required**  |

```http
  DELETE /deleteOne/${ecgId}
```
