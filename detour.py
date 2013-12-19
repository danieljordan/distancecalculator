from math import *

def shorterDetour():
    
    #Gather coordinates from user input
    latA = float(raw_input("Enter the latitude of Driver One's start point:"))
    lonA = float(raw_input("Enter the longitude of Driver One's start point:"))
    latB = float(raw_input("Enter the latitude of Driver One's end point:"))
    lonB = float(raw_input("Enter the longitude of Driver One's end point:"))
    latC = float(raw_input("Enter the latitude of Driver Two's start point:"))
    lonC = float(raw_input("Enter the longitude of Driver Two's start point:"))
    latD = float(raw_input("Enter the latitude of Driver Two's end point:"))
    lonD = float(raw_input("Enter the longitude of Driver Two's end point:"))
    
    #Create arrays from coordinate pairs
    A = [latA, lonA]
    B = [latB, lonB]
    C = [latC, lonC]
    D = [latD, lonD]
    
    #Haversine formula calculates distance between two points on a sphere
    def calculateDistance(point1, point2):
        
        lat1 = point1[0]
        lat2 = point2[0]
        lon1 = point1[1]
        lon2 = point2[1]

        dlon = radians(lon2 - lon1)
        dlat = radians(lat2 - lat1)
        a = sin(dlat/2)**2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon/2)**2
        c = 2 * atan2(sqrt(a), sqrt(1-a))
        d = 3959 * c
    
        return d
    
    #Determine distance between points
    AB = calculateDistance(A, B)
    AC = calculateDistance(A, C)
    BD = calculateDistance(B, D)
    CD = calculateDistance(C, D)
    
    #Determine distance of each driver's detour
    DriverOneDistance = AC + CD + BD
    DriverTwoDistance = AC + AB + BD
    
    #Print answer
    def compareDetours():
        if DriverOneDistance < DriverTwoDistance:
            print "Driver One has the shorter detour at" + " " + str(DriverOneDistance) + " " + "miles."
        else:
            print "Driver Two has the shorter detour at" + " " + str(DriverTwoDistance) + " " + "miles."

    compareDetours()

shorterDetour()