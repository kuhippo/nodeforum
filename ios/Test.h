//
//  Test.h
//  nodeforum
//
//  Created by mubin on 1/3/17.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

//第一步导入这个方法因为要导出点击事件
#import <React/RCTComponent.h>
@interface Test : UIView

//点击方法 前面要加on
@property (nonatomic,copy)RCTBubblingEventBlock onClick;
@property (nonatomic,copy)NSString *title;

@end
