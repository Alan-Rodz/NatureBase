import sqlite3
import sys
from ruamel.yaml import YAML

# *********************************************************************************
yaml = YAML()

plantdb = extract_fields()
ids = [plant[0] for plant in plantdb]
types = [plant[1] for plant in plantdb]
common_names = [plant[2] for plant in plantdb]
latin_names = [plant[3] for plant in plantdb]
exposures = [plant[4] for plant in plantdb]
moistures = [plant[5] for plant in plantdb]
heights = [plant[6] for plant in plantdb]
availabilitys = [plant[7] for plant in plantdb]
eases_of_growth = [plant[8] for plant in plantdb]
image_names = [plant[9] for plant in plantdb]


yaml_files = ["""\
id: {}
availability: '{}'
common_name: '{}'
ease_of_growth: '{}' 
exposure: '{}' 
height: {}
imgName: '{}' 
latin_name: '{}' 
moisture: '{}' 
type: '{}' 
""".format(ids[i], availabilitys[i], common_names[i], eases_of_growth[i], exposures[i], float(heights[i]), image_names[i], latin_names[i], moistures[i], types[i])
    for i in range(len(ids))]

for i in range(len(common_names)):
    data = yaml.load(yaml_files[i])
    file = open('../yaml_files/{}.yaml'.format(common_names[i]), 'w')
    yaml.dump(data, file)

# == Util =========================================================================
def extract_fields():
    try:
        connection = sqlite3.connect('../AdvancedDataBase.db')
        cursor = connection.cursor()
        query = cursor.execute('SELECT * FROM Hoja1')
        answer = query.fetchall()
        connection.close()
        return answer
    except sqlite3.Error as e:
        print(e)
