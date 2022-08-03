from os import listdir
from os.path import isfile, join

# *********************************************************************************
mypath = '../yaml_files/'
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]


for i in range(len(onlyfiles)):
    print("'{}',".format(onlyfiles[i][:-5]))