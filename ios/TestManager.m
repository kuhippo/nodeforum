//
//  TestManager.m
//  nodeforum
//
//  Created by mubin on 1/3/17.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestManager.h"
//导入库
#import <React/RCTViewManager.h>
#import "Test.h"

@implementation TestManager

//导出
RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(title, NSString)

RCT_EXPORT_VIEW_PROPERTY(onClick, RCTBubblingEventBlock)

//js调用原生
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}


-(UIView *)view{
  Test *testView = [Test new];
  
  testView.backgroundColor = [UIColor redColor];
  return testView;
}




@end
