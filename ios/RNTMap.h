// RNTMap.h

#import <MapKit/MapKit.h>

#import <React/RCTComponent.h>

@interface RNTMap: MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onChange;

@end
